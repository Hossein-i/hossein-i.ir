export interface CheckRouteProps {
  pathname: string;
  route: string;
}

export const checkRoute = (props: CheckRouteProps) => {
  const { pathname, route } = props;

  const regexEndsWithStar = `^(${
    route === '/' ? ['', '/'].join('|') : route
  })(/[\u0600-\u06FF\u0750-\u077Fa-zA-Z0-9-]*)?/?$`;
  const regexEndsWithoutStar = `^(${
    route === '/' ? ['', '/'].join('|') : route
  })/?$`;

  const regex = route.endsWith('/*') ? regexEndsWithStar : regexEndsWithoutStar;

  return RegExp(regex, 'i').test(decodeURI(pathname));
};
