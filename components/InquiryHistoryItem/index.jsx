import React from "react";
import TextButton42 from "../TextButton42";
import TextButton52 from "../TextButton52";
import "./InquiryHistoryItem.sass";

function InquiryHistoryItem(props) {
  const {
    btnText521Props,
    textButton1Props,
    btnText522Props,
    textButton2Props,
    textButton3Props,
    textButton4Props,
  } = props;

  return (
    <article className="inquiry-history-item">
      <div className="text-container">
        <TextButton42>{btnText521Props.children}</TextButton42>
        <TextButton52>{textButton1Props.children}</TextButton52>
        <TextButton42 className={btnText522Props.className}>{btnText522Props.children}</TextButton42>
        <TextButton52>{textButton2Props.children}</TextButton52>
        <TextButton52>{textButton3Props.children}</TextButton52>
        <TextButton52>{textButton4Props.children}</TextButton52>
        <div className="text-button-1">
          <div className="text_label-97 valign-text-middle notosanssc-normal-hippie-blue-16px">已完成</div>
        </div>
      </div>
    </article>
  );
}

export default InquiryHistoryItem;
