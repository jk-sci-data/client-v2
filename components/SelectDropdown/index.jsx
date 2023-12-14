import React, { useState } from 'react';
import './SelectDropdown.sass'; 
import expandbox from "../../dist/img/expandbox@2x.png";

const SelectDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`input-select ${isOpen ? 'active' : ''}`}>
      <div className="select-btn" onClick={toggleDropdown}>
        {selectedOption || '请输入全名'}
        <span className="arrow"> <img src={expandbox} alt="expandbox" /></span>
      </div>
      {isOpen && (
        <div className="select-options">
          {options.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
