import React from 'react';
import './DropdownButtonList.sass';

const DropdownButtonList = ({ icon, name, items }) => {
  return (
    <div className="dropdown">
      <button className="btn-14">
        <i className="icon">{icon}</i>
        <span className="text_label-94 valign-text-middle notosanssc-medium-tundora-16px">{name}</span>
      </button>
      <div className="dropdownlist-content">
        {items.map((item, index) => (
          <a key={index} href={item.link}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownButtonList;
