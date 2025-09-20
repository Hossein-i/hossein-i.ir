import { defineAuthMiddleware } from './shared/middleware/auth';

const authMiddleware = defineAuthMiddleware({
  routes: {
    auth: [
      // { path: '/auth' }, { path: '/auth/verify-request' }
    ],
    protected: [
      // { path: '/auth/logout', roles: [UserRole.USER, UserRole.ADMIN] },
      // { path: '/auth/register', roles: [UserRole.USER, UserRole.ADMIN] },
      // { path: '/my/*', roles: [UserRole.USER, UserRole.ADMIN] },
      // { path: '/admin/*', roles: [UserRole.ADMIN] },
    ],
    fallback: {
      loginRedirect: '/',
      authRedirect: '/api/auth/signin',
      accessDeniedRedirect: '/access-denied',
      logoutRedirect: '/api/auth/signout',
    },
  },
  cookieNames: {
    callbackUrl: 'callback_url',
  },
});

export default authMiddleware();

export const config = { matcher: [{ source: '/((?!api|_next|.*\\..*).*)' }] };
