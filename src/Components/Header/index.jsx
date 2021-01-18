import React from 'react';
import './Header.scss';
import Icon from '../Icon';
import Badge from '@material-ui/core/Badge';

function Header({ togglePanel }) {
  return (
    <div className="w-100 header__bar d-flex">
      <div className="d-flex m-l-2">
        <Icon name="menu" className="menu" onClick={togglePanel} />
        <div className="global__search">Search for something...</div>
      </div>
      <div className="d-flex w-20 m-r-1 header__action__elm ai-c">
        <div className="m-h-10 header__mail__icon">
          <Badge badgeContent={4} color="primary">
            <Icon name="envelope" color="header__icon--color" />
          </Badge>
        </div>
        <div className="m-h-10 header__notification__icon">
          <Badge badgeContent={4} color="primary">
            <Icon name="notification" color="header__icon--color" />
          </Badge>
        </div>
        <Icon name="logout" className="m-h-5" color="header__icon--color" />
        <span className="log--out">Log out</span>
      </div>
    </div>
  );
}

export default Header;
