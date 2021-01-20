import React from 'react';
import Icon from '../Icon';
function ListItem({ itemName, itemIconName, iconColor, onItemClick }) {
  return (
    <div className="d-flex ai-c w-60" onClick={onItemClick}>
      {itemIconName && (
        <Icon
          name={itemIconName}
          className="m-r-2"
          color={iconColor || itemName}
        />
      )}
      <span className="uppercase">{itemName}</span>
    </div>
  );
}

export default ListItem;
