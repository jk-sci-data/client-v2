import React from "react";
import "./InputBoxRegular3.sass";

function InputBoxRegular3(props) {
  const { placeholder } = props;

  return (
     <select name="choose">
      <option value="">必填</option>
      <option value="choose1">1</option>
      <option value="choose2">2</option>
      <option value="choose3">3</option>
      <option value="choose5">4</option>
      <option value="choose6">5</option>
      <option value="choose7">6</option>
    </select>
  
  );
}

export default InputBoxRegular3;
