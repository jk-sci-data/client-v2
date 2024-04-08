// Pagination.js
import React from 'react';
import "./pagination.sass";
import BtnLast from "../../static/img/btn_last.png";
import BtnNext from "../../static/img/btn_next.png";
const Pagination = () => {
  return (
    <div className="pagination-section">
      <ul className="pagination first">
        <li><a href="#"><img src={BtnLast} alt="BtnLast" /></a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#"><img src={BtnNext} alt="BtnNext" /></a></li>
      </ul>
    </div>
  );
};

export default Pagination;
