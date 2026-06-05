import { type FC } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';
import { type AllowedPath } from '../routing/routes.ts';

interface AppLinkProps extends Omit<NavLinkProps, 'to'> {
  to: AllowedPath;
}

const AppLink: FC<AppLinkProps> = ({to, children, ...props}) => {
  return (
    <NavLink to={to} {...props}>
      {children}
    </NavLink>
  );
};

export default AppLink;