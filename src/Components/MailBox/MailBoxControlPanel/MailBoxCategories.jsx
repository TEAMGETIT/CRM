import React from 'react';
import ListItem from '../../ListItem';

function MailBoxCategories() {
  const categoriesList = [
    { categoryDisplayname: 'Work', iconName: 'circle', iconColor: 'bg--green'},
    { categoryDisplayname: 'Documents', iconName: 'circle', iconColor: 'bg--red' },
    { categoryDisplayname: 'Social', iconName: 'circle', iconColor: 'bg--blue2' },
    { categoryDisplayname: 'Advertising', iconName: 'circle', iconColor: 'bg--blue' },
    { categoryDisplayname: 'Clients', iconName: 'circle', iconColor: 'bg--orange' },
  ];
  return (
    <div className="w-100">
      <h4 className="m-v-5 mailbox__controlpanel__header">CATEGORIES</h4>
      {categoriesList.map((category) => (
        <div className="d-flex ai-c m-v-4 category__item">
          <ListItem
            itemName={category.categoryDisplayname}
            itemIconName={category.iconName}
            iconColor={category.iconColor}
          />
        </div>
      ))}
    </div>
  );
}

export default MailBoxCategories;
