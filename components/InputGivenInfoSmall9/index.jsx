import React from "react";
import BtnText72 from "../BtnText72";
import "./InputGivenInfoSmall9.sass";

function InputGivenInfoSmall9(props) {
  const { subtitle, btnText7Props } = props;

  return (
    <article className="input_given-info_small-8">
      <div className="input_subtitle_container-12">
        <div className="subtitle-23 notosanssc-normal-shark-20px">{subtitle}</div>
      </div>
      <BtnText72>{btnText7Props.children}</BtnText72>
    </article>
  );
}

export default InputGivenInfoSmall9;
