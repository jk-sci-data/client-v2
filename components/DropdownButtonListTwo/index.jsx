import React from 'react';
import './DropdownButtonListTwo.sass';

const DropdownButtonList = ({ icon, name, items }) => {
  return (
    <div className="dropdown">
      <button className="btn-14">
        <span className="text_label-94 valign-text-middle notosanssc-medium-tundora-16px">{name}</span>
        <i className="icon">{icon}</i>
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
