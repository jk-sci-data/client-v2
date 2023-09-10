import React from "react";
import BtnCheckbox22 from "../BtnCheckbox22";
import TextButton42 from "../TextButton42";
import TextButton52 from "../TextButton52";
import "./InquiryItem.sass";

function InquiryItem(props) {
  const {
    btnCheckbox2Props,
    btnText51Props,
    textButton1Props,
    btnText52Props,
    textButton2Props,
    textButton3Props,
    textButton4Props,
  } = props;

  return (
    <article className="inquiry-item">
      <div className="flex-row-3">
        <BtnCheckbox22 className={btnCheckbox2Props.className} />
        <TextButton42>{btnText51Props.children}</TextButton42>
        <TextButton52>{textButton1Props.children}</TextButton52>
        <TextButton42 className={btnText52Props.className}>{btnText52Props.children}</TextButton42>
        <TextButton52>{textButton2Props.children}</TextButton52>
        <TextButton52>{textButton3Props.children}</TextButton52>
        <TextButton52>{textButton4Props.children}</TextButton52>
        <div className="text-box-1">
          <div className="status valign-text-middle notosanssc-normal-stiletto-16px">待研发报价</div>
        </div>
      </div>
    </article>
  );
}

export default InquiryItem;
