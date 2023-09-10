import React from "react";
import "./Word.sass";

function Word(props) {
  const { className } = props;

  return (
    <div className={`word-1 ${className || ""}`}>
      <div className="overlap-group3">
        <div className="overlap-group-container">
          <div className="group-container">
            <div className="group">
              <img className="vector-10" src="/img/vector-13@2x.png" alt="Vector" />
            </div>
            <div className="group-1">
              <img className="vector-10" src="/img/vector-14@2x.png" alt="Vector" />
            </div>
          </div>
          <div className="group-container-1">
            <div className="group-2">
              <img className="vector-13" src="/img/vector-15@2x.png" alt="Vector" />
            </div>
            <div className="group-3">
              <img className="vector-13" src="/img/vector-16@2x.png" alt="Vector" />
            </div>
          </div>
        </div>
        <img className="vector-14" src="/img/vector-4@2x.png" alt="Vector" />
        <img className="vector-15" src="/img/vector-5@2x.png" alt="Vector" />
        <img className="vector-16" src="/img/vector-6@2x.png" alt="Vector" />
        <img className="vector-17" src="/img/vector-7@2x.png" alt="Vector" />
        <img className="vector-18" src="/img/vector-8@2x.png" alt="Vector" />
        <img className="group-4" src="/img/group@2x.png" alt="Group" />
        <img className="vector-19" src="/img/vector-9@2x.png" alt="Vector" />
      </div>
      <img className="vector-20" src="/img/component-1-9@2x.png" alt="Vector" />
    </div>
  );
}

export default Word;
