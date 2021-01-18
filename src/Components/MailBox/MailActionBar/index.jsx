import React from 'react';
import './MailActionBar.scss';
import SearchBox from '../../SearchBox';
import Icon from '../../Icon';
import Label from '../../Label';

function MailActionBar({ header, isFolder, viewList, label }) {
  return (
    <div className="w-100 mail__actionbar">
      <div className="w-100 d-flex ai-c jc-sb">
        <h1 className="m-v-1">{header}</h1>
        {isFolder && <SearchBox placeholder="Search email" />}
      </div>
      <div className="d-flex jc-sb">
        <div className="mail__action d-flex w-30">
          {isFolder && (
            <button className="btn d-flex m-r-3 refresh">
              <Icon name="refresh" color="bg--color2" />
              <span className="m-l-4">Refresh</span>
            </button>
          )}
          {!isFolder && (
            <button className="btn m-r-3" onClick={() => viewList()}>
              <Icon name="left" color="bg--color2" />
            </button>
          )}
          <button className="btn m-r-3">
            <Icon name="view" color="bg--color2" />
          </button>
          <button className="btn m-r-3">
            <Icon name="exclamation" color="bg--color2" />
          </button>
          <button className="btn m-r-3">
            <Icon name="trash" color="bg--color2" />
          </button>
          {!isFolder && label && <Label content={label} bgColorClass={label} />}
        </div>
        <div className="mail__navigation d-flex w-30 jc-fe">
          <button className="btn">
            <Icon name="left" color="bg--color2" />
          </button>
          <button className="btn">
            <Icon name="right" color="bg--color2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MailActionBar;
