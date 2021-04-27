import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect } from 'react';
import SearchRow from './components/search-row/SearchRow';
import './Header.scss';

const Header: FC<{}> = () => {

  const active = (url: string): boolean => {
    return window.location.href.includes(url);
  };

  const searchChange = (value: string) => {
    console.log(value);
  }

  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container'>
            <a className='navbar-brand' href='#'>
              MovieYES
            </a>
            <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
              <li className={active('#') ? 'nav-item active' : 'nav-item'}>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className={active('/soup') ? 'nav-item active' : 'nav-item'}>
                <Link className='nav-link' to='/soup'>
                  Soup
                </Link>
              </li>
              <li className={active('/films') ? 'nav-item active' : 'nav-item'}>
                <Link className='nav-link' to='/films'>
                  Films
                </Link>
              </li>
              <li className={active('/anime') ? 'nav-item active' : 'nav-item'}>
                <Link className='nav-link' to='/anime'>
                  Anime
                </Link>
              </li>
            </ul>
            <div className='login-and-search-container my-2 my-lg-0'>
              <button
                id='search-button'
                type='button'
                className='btn btn-primary login'
              >
                <FontAwesomeIcon icon={faUsers} />
              </button>
              <SearchRow searchChange={searchChange}></SearchRow>
            </div>
          </div>
        </nav>
      </div>
    </Router>
  );
};

export default Header;
