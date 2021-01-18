import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SideExpansionPanel.scss';
import Icon from '../Icon';

const expansionPannelIconsData = [
  { routePath: '/dashboard', displayName: 'Dashboard', iconName: 'dashboard' },
  { routePath: '/layout', displayName: 'Layout', iconName: 'diamond' },
  { routePath: '/graph', displayName: 'Graphs', iconName: 'bar-graph' },
  { routePath: '/mailbox', displayName: 'Mailbox', iconName: 'envelope' },
  { routePath: '/metrics', displayName: 'Metrics', iconName: 'pie-chart' },
  { routePath: '/widgets', displayName: 'Widgets', iconName: 'beaker' },
  { routePath: '/forms', displayName: 'Forms', iconName: 'editor' },
  { routePath: '/app-view', displayName: 'App Views', iconName: 'imac' },
  {
    routePath: '/documents',
    displayName: 'Documents',
    iconName: 'copy-document',
  },
  { routePath: '/locations', displayName: 'Locations', iconName: 'earth' },
  {
    routePath: '/extra-widgets',
    displayName: 'Extra Widgets',
    iconName: 'beaker',
  },
  {
    routePath: '/mobile-view',
    displayName: 'Mobile Views',
    iconName: 'laptop',
  },
];

function SideExpansionPanel({ location, isPanelOpen }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [curretRoutePath, setCurretRoutePath] = useState();

  const SideExpansionPanelElm = ({ routePath, displayName, iconName }) => {
    console.log(iconName);
    return (
      <Link to={routePath}>
        <div
          className={`side-menu ai-c ${
            curretRoutePath === routePath ? 'selected' : ''
          }`}
        >
          <Icon name={iconName} className="customized-sidebar-icon" />
          <span
            className={
              'menu-item-header ' +
              (sideBarOpen
                ? 'menu__displayname--fadeIn'
                : 'menu__displayname--fadeout')
            }
          >
            {displayName}
          </span>
        </div>
      </Link>
    );
  };
  useEffect(() => {
    if (location.pathname !== curretRoutePath) {
      setCurretRoutePath(location.pathname);
    }
  }, [location]);

  useEffect(() => {
    setSideBarOpen(isPanelOpen);
  }, [isPanelOpen]);

  return (
    <div className="sidebar" style={{ width: sideBarOpen ? '185px' : '70px' }}>
      <div className="header">IN+</div>
      <div className="side-menu-holder">
        {expansionPannelIconsData.map((iconData) => (
          <SideExpansionPanelElm
            iconName={iconData.iconName}
            routePath={iconData.routePath}
            displayName={iconData.displayName}
          />
        ))}
      </div>
    </div>
  );
}

export default withRouter(SideExpansionPanel);
