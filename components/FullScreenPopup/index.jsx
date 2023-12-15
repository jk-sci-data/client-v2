// Popup.js

import React from "react";
import "./FullScreenPopup.sass"; 

const FullScreenPopup = ({ isVisible, onClose, children }) => {
  return (
    <>
      {isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={onClose}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreenPopup;
