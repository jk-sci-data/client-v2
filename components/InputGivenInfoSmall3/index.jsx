import React from "react";
import BtnText62 from "../BtnText62";
import "./InputGivenInfoSmall3.sass";

function InputGivenInfoSmall3(props) {
  const { subtitle, btnText6Props } = props;

  return (
    <article className="input_given-info_small-2">
      <div className="input_subtitle_container-4">
        <div className="subtitle-14 notosanssc-normal-shark-20px">{subtitle}</div>
      </div>
      <BtnText62>{btnText6Props.children}</BtnText62>
    </article>
  );
}

export default InputGivenInfoSmall3;
