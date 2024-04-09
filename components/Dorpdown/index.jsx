import React, { useState } from 'react';
import './Dropdown.sass';
import quene from "../../static/img/component-1-8@2x.png"; 

function Dropdown({ options, onOptionSelected }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selection, setSelection] = useState(options[0]); // Initialize with the first option as default selection
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleSelect = (option) => {
      setSelection(option);
      onOptionSelected(option); // Call the passed sorting function
      setIsOpen(false);
    };

  return (
    <div style={{ position: 'relative' }}>
      <button className="category-btn d-flex "  style={{ width: '200px',}}
  onClick={toggleDropdown}>
      <img src={quene} className="d-inline-block align-top" alt="quene" />
        {selection} 
      </button>
      {isOpen && (
        <ul className="dropdown_wrap">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
