import React from 'react';
import Icon from '../Icon';
function ListItem({ itemName, itemIconName, iconColor }) {
  return (
    <React.Fragment>
      {itemIconName && <Icon name={itemIconName} color={iconColor}/>}
      <span>{itemName}</span>
    </React.Fragment>
  );
}

export default ListItem;
