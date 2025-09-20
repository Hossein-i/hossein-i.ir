import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { config as serverConfig } from '../config/server';
import { checkRoute } from '../lib/check-route';

import { UserRole } from '@/entities/user';

export type AuthHandler = (
  request: NextRequest,
  context?: unknown
) => NextResponse | Promise<NextResponse>;

/** Represents a route rule configuration for handling route access control. */
export interface RouteRule {
  /** The URL path for the route */
  path: string;

  /** Optional array of user roles that are allowed to access this route */
  roles?: UserRole[];
}

/** Configuration options for the authentication middleware. */
export interface AuthMiddlewareConfig {
  /** Configuration for authentication-related routes */
  routes: {
    /** Routes that are part of the authentication flow (login, register) */
    auth: RouteRule[];

    /** Routes that require authentication and specific roles to access */
    protected: RouteRule[];

    /** Redirection configuration for authentication flow */
    fallback: {
      /** URL for login redirect when authentication is required */
      loginRedirect: string;

      /** URL for redirect after successful authentication */
      authRedirect: string;

      /** URL for redirect when access is denied */
      accessDeniedRedirect: string;

      /** URL for the logout redirect */
      logoutRedirect: string;
    };
  };
  /** Custom names for authentication-related cookies */
  cookieNames: {
    /** Name of the cookie that stores the callback URL */
    callbackUrl: string;
  };
}

export const defineAuthMiddleware = (config: AuthMiddlewareConfig) => {
  const { routes, cookieNames } = config;
  const { auth: authRoutes, protected: protectedRoutes, fallback } = routes;
  const { authRedirect, loginRedirect, accessDeniedRedirect, logoutRedirect } =
    fallback;

  return (
    next?: AuthHandler
  ): ((request: NextRequest) => Promise<NextResponse<unknown>>) => {
    return async (request) => {
      const response = (await next?.(request)) || NextResponse.next();
      const { origin, pathname } = request.nextUrl;

      const token = await getToken({
        req: request,
        secret: serverConfig.AUTH_SECRET,
      });
      const isLoggedIn = Boolean(token);

      const isAuthRoute = authRoutes.some((route) =>
        checkRoute({ pathname, route: route.path })
      );

      const matchedProtected = protectedRoutes.find((route) =>
        checkRoute({ pathname, route: route.path })
      );

      const callbackUrlCookie = request.cookies.get(cookieNames.callbackUrl);
      const callbackUrl = callbackUrlCookie?.value;

      const userRole: UserRole = token?.role || UserRole.GUEST;

      if (isLoggedIn && isAuthRoute) {
        if (callbackUrl) {
          response.cookies.delete(cookieNames.callbackUrl);

          return NextResponse.redirect(new URL(callbackUrl, origin), {
            headers: response.headers,
          });
        }

        return NextResponse.redirect(new URL(loginRedirect, origin), {
          headers: response.headers,
        });
      }

      if (matchedProtected) {
        if (!isLoggedIn) {
          const isPrefetch =
            request.headers.get('next-router-prefetch') === '1';

          if (!isPrefetch && pathname !== logoutRedirect) {
            response.cookies.set(cookieNames.callbackUrl, pathname, {
              path: '/',
              httpOnly: true,
              sameSite: 'lax',
            });
          }

          return NextResponse.redirect(new URL(authRedirect, origin), {
            headers: response.headers,
          });
        }

        const isAllowed =
          !matchedProtected.roles || matchedProtected.roles.includes(userRole);

        if (!isAllowed) {
          return NextResponse.redirect(new URL(accessDeniedRedirect, origin), {
            headers: response.headers,
          });
        }
      }

      return response;
    };
  };
};
