import React, { useState } from "react";
import "./BtnText3.sass";
import FullScreenPopup from "../FullScreenPopup"; // Update the path based on your file structure

function BtnText3(props) {
  const { children } = props;
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  return (
    <div className="btn_text-27">
      <div className="text_label-140 valign-text-middle notosanssc-normal-stiletto-16px">
        <a href="#" onClick={togglePopup}>
          {children}
        </a>
      </div>

      <FullScreenPopup isVisible={isPopupVisible} onClose={togglePopup}>
        {/* Popup content goes here */}
        <p>This is the content of the popup.</p>
      </FullScreenPopup>
    </div>
  );
}

export default BtnText3;
