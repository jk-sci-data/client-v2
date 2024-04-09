// Pagination.js
import React from 'react';
import "./pagination.sass"; // Make sure the path to your CSS file is correct
import BtnLast from "../../static/img/btn_last.png"; // Update these paths as necessary
import BtnNext from "../../static/img/btn_next.png";

const Pagination = ({
  totalPages,
  currentPage,
  handlePreviousPage,
  handleNextPage,
  handlePageChange
}) => {
  // Generate page numbers for dynamic rendering
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    totalPages > 1 && (
      <div className="pagination-section">
        <ul className="pagination">
          <li onClick={handlePreviousPage}>
            <img src={BtnLast} alt="Previous Page" />
          </li>
          {pageNumbers.map(number => (
            <li key={number} className={currentPage === number ? 'active' : ''}>
              <a onClick={(e) => { e.preventDefault(); handlePageChange(number); }} href="!#">
                {number}
              </a>
            </li>
          ))}
          <li onClick={handleNextPage}>
            <img src={BtnNext} alt="Next Page" />
          </li>
        </ul>
      </div>
    )
  );
};

export default Pagination;
