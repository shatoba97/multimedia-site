import React, { FC } from 'react';
import { Link, Route } from 'react-router-dom';
import { CustomLinkType } from './CustomLinkTypeType';

const CustomLink: FC<CustomLinkType> = ({to, title}) => {
  return (
    <Route
      path={to}
      children={({ match }) => {
        return (
          <li
            className={match && match.isExact ? 'nav-item active' : 'nav-item'}
          >
            <Link className='nav-link' to={to}>
              {title}
            </Link>
          </li>
        );
      }}
    />
  );
};

export default CustomLink;
