import React from 'react';
import './Header.scss';
import Icon from '../Icon';
import { headerIconColor } from '../../Scss/colors.scss';
function Header() {
  return (
    <div className="w-100 header__bar d-flex">
      <div className="d-flex m-l-2">
        <Icon name="menu" className="menu" />
        <div className="global__search">Search for something...</div>
      </div>
      <div className="d-flex w-20 m-r-1 header__action__elm">
        <Icon name="envelope" className="m-h-5" color="header__icon--color" />
        <Icon name="notification" className="m-h-5" color="header__icon--color" />
        <Icon name="logout" className="m-h-5" color="header__icon--color" />
        <span className="log--out">Log out</span>
      </div>
    </div>
  );
}

export default Header;
