// AccordionSection.js
import React from 'react';
import IconSwichted from "../dist/img/icon_swichted.png";

const AccordionSection = () => {
  return (
    <section className="accordion">

      <div className="tab">
        <input type="checkbox" name="accordion-1" id="cb2" />
        <label htmlFor="cb2" className="tab__label">
         <p> <img src={IconSwichted} alt="IconSwichted" />切换账号</p>
        </label>
        <div className="tab__content">
          <div className="list">
            <div className="list-left">
              <p className="first">Company Name</p>
              <p className="second">Account  Name</p>
            </div>
            <div className="list-right">
              <a href="">登录</a>
            </div>
          </div>
          <div className="list">
            <div className="list-left">
              <p className="first">J&K</p>
              <p className="second">Account  Name</p>
            </div>
            <div className="list-right">
              <a href="">登录</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
