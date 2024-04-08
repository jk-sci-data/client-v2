import React from "react";
import "./InputBoxRegular42.sass";
import useForm from "hooks/useForm";
 
//todo: add back InputProvider
function InputBoxRegular42(props) {
  const { icon_Regular, inputPlaceholder, name, form } = props;

  console.log("Inputboxregular42-props", props)
  const value = form.data[name];

  const handleInputChange = form.onChange;
  return (
    <article className="input-box_regular">
      <img className="icon_regular" src={icon_Regular} alt="icon_regular" />
      <input
        className="placeholder notosanssc-normal-quick-silver-20px"
        name={name || "placeholder"}
        placeholder={inputPlaceholder}
        type={props.inputType || "text"}
        value={value || ""}
        onInput={handleInputChange || (() => {})}
      />
    </article>
  );
} 

export default InputBoxRegular42;
