import React from 'react';
import ListItem from '../../ListItem';

function MailBoxCategories() {
  const categoriesList = [
    { categoryDisplayname: 'work', iconName: 'circle', },
    { categoryDisplayname: 'documents', iconName: 'circle' },
    { categoryDisplayname: 'social', iconName: 'circle' },
    { categoryDisplayname: 'advertising', iconName: 'circle' },
    { categoryDisplayname: 'clients', iconName: 'circle'},
  ];
  return (
    <div className="w-100">
      <h4 className="m-v-5 mailbox__controlpanel__header">CATEGORIES</h4>
      {categoriesList.map((category) => (
        <div className="d-flex ai-c m-v-4 category__item">
          <ListItem
            itemName={category.categoryDisplayname}
            itemIconName={category.iconName}
          />
        </div>
      ))}
    </div>
  );
}

export default MailBoxCategories;
