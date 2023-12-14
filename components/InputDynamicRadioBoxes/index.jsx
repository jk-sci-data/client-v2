import React, { useState } from 'react';
import "./InputDynamicRadioBoxes.sass";
import AddButton from "../../dist//img/button@2x.png"; 
const InputDynamicRadioBoxes = () => {
  const [nameInput, setNameInput] = useState('');
  const [radioBoxes, setRadioBoxes] = useState([]);

  const addRadio = () => {
    const name = nameInput.trim();
    if (name === '') {
      alert('Please enter a name first.');
      return;
    }

    const radioHtml = (
      <label key={name}>
                {name}
        <input
          type="radio"
          name="selectedName"
          value={name}
          checked={name === nameInput}
          onChange={() => handleRadioChange(name)}
        />
       


        <br />
      </label>
    );

    setRadioBoxes((prevRadioBoxes) => [...prevRadioBoxes, radioHtml]);
    setNameInput('');
  };

  const handleRadioChange = (selectedName) => {
    setNameInput(selectedName);
  };

  return (
    <div>
      <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="必填" />
      <button onClick={addRadio} className="addbutton"><img src={AddButton} alt="AddButton" /> <source /></button>

      <div id="radioBoxes">
        {radioBoxes.map((radioBox) => radioBox)}
      </div>
    </div>
  );
};

export default InputDynamicRadioBoxes;
 