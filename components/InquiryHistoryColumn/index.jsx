import React from "react";
import InquiryHistoryItem from "../InquiryHistoryItem";
import "./InquiryHistoryColumn.sass";

function InquiryHistoryColumn(props) {
  const {
    inquiryHistoryItem1Props,
    inquiryHistoryItem2Props,
    inquiryHistoryItem3Props,
    inquiryHistoryItem4Props,
  } = props;

  return (
    <div className="inquiry-history-column">
      <InquiryHistoryItem
        btnText521Props={inquiryHistoryItem1Props.btnText521Props}
        textButton1Props={inquiryHistoryItem1Props.textButton1Props}
        btnText522Props={inquiryHistoryItem1Props.btnText522Props}
        textButton2Props={inquiryHistoryItem1Props.textButton2Props}
        textButton3Props={inquiryHistoryItem1Props.textButton3Props}
        textButton4Props={inquiryHistoryItem1Props.textButton4Props}
      />
      <InquiryHistoryItem
        btnText521Props={inquiryHistoryItem2Props.btnText521Props}
        textButton1Props={inquiryHistoryItem2Props.textButton1Props}
        btnText522Props={inquiryHistoryItem2Props.btnText522Props}
        textButton2Props={inquiryHistoryItem2Props.textButton2Props}
        textButton3Props={inquiryHistoryItem2Props.textButton3Props}
        textButton4Props={inquiryHistoryItem2Props.textButton4Props}
      />
      <InquiryHistoryItem
        btnText521Props={inquiryHistoryItem3Props.btnText521Props}
        textButton1Props={inquiryHistoryItem3Props.textButton1Props}
        btnText522Props={inquiryHistoryItem3Props.btnText522Props}
        textButton2Props={inquiryHistoryItem3Props.textButton2Props}
        textButton3Props={inquiryHistoryItem3Props.textButton3Props}
        textButton4Props={inquiryHistoryItem3Props.textButton4Props}
      />
      <InquiryHistoryItem
        btnText521Props={inquiryHistoryItem4Props.btnText521Props}
        textButton1Props={inquiryHistoryItem4Props.textButton1Props}
        btnText522Props={inquiryHistoryItem4Props.btnText522Props}
        textButton2Props={inquiryHistoryItem4Props.textButton2Props}
        textButton3Props={inquiryHistoryItem4Props.textButton3Props}
        textButton4Props={inquiryHistoryItem4Props.textButton4Props}
      />
    </div>
  );
}

export default InquiryHistoryColumn;
