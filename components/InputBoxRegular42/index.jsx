import React from "react";
import "./InputBoxRegular42.sass";
 
//todo: add back InputProvider
function InputBoxRegular42(props) {
  const { icon_Regular, inputPlaceholder, name, form, field } = props;

  return (
    <article className="input-box_regular">
      <img className="icon_regular" src={icon_Regular} alt="icon_regular" />
      <input
        className="placeholder notosanssc-normal-quick-silver-20px"
        placeholder={inputPlaceholder}
        type={props.inputType || "text"}
        {...(field || {})}
        onChange={field?.onChange ?? props.onChange ?? (() => {})}
      />
    </article>
  );
} 

export default InputBoxRegular42;
