import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect } from 'react';
import './Header.scss';
import CustomLink from '../shared/link/CustomLink';

const Header: FC<{}> = () => {

  const active = (url: string): boolean => {
    return window.location.href.includes(url);
  };

  const searchChange = (value: string) => {
    console.log(value);
  }

  return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              MovieYES
            </a>
            <ul className='links navbar-nav mt-lg-0'>
                <CustomLink to={'/'} title={'Home'}/>
                <CustomLink to={'/soup'} title={'Soup'}/>
                <CustomLink to={'/films'} title={'Films'}/>
                <CustomLink to={'/anime'} title={'Anime'}/>
            </ul>
            <div className='login-and-search-container my-2 my-lg-0'>
              <button
                id='search-button'
                type='button'
                className='btn btn-primary login'
                onClick={()=> {}}
              >
                <FontAwesomeIcon icon={faUsers} />
              </button>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Header;
