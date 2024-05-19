import React from "react";
import InputSubtitleContainer2 from "../InputSubtitleContainer2";
import InputBoxSmall from "../InputBoxSmall";
import "./InputSmall2.sass";
import { InputContext } from "contexts";
import Select from 'react-select';

function InputBoxSmallUoM(props) {
  const { className } = props;

  const inputCtx = React.useContext(InputContext) || {};
  const { field, field2 } = inputCtx;

  const unitOptions = [];
  return <div style={{ display: "flex", flexFlow: "row nowrap", gap: "2px" }}>
    <div className={`input-box_small ${className || ""}`} style={{ minWidth: "50%", flex: "1" }}>
      <input {...(field || {})}
        style={{ background: "none", border: "none", height: "100%", width: "100%" }} />
    </div>
    <div style={{ width: "6em" }}>
      <Select {...(field2 ?? {})}
        options={unitOptions}
        classNamePrefix="select-field"
        onSelectResetsInput={false}
        className="react-select-container"
      />
    </div>
  </div>;
}


function InputSmallUoM(props) {
  const { className, inputSubtitleContainer2Props } = props;

  return (
    <article className={`input_small-3 ${className || ""}`}>
      <InputSubtitleContainer2>{inputSubtitleContainer2Props.children}</InputSubtitleContainer2>
      <InputBoxSmallUoM inputProps={props.inputProps} />
    </article>
  );
}

export default InputSmallUoM;
