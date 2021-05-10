import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../core/shared/components/link/CustomLink';
import './Header.scss';

const Header: FC<{}> = () => {
  return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container'>
            <Link className='navbar-brand' to="/today" >Животные</Link>
            <ul className='links navbar-nav mt-lg-0'>
                <CustomLink to={'/today'} title={'Сегодня '}/>
                <CustomLink to={'/animals'} title={'Животные '}/>
            </ul>
          </div>
        </nav>
      </div>
  );
};

export default Header;
