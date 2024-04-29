import React from 'react';
import "./pagination.sass"; 
import BtnLast from "static/img/btn_last.png"; 
import BtnNext from "static/img/btn_next.png";

const Pagination = ({ totalPages, currentPage, handlePreviousPage, handleNextPage, handlePageChange }) => {
  const pageNumbers = [];
  const maxVisiblePages = 5; // Adjust this value as needed

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    totalPages > 1 && (
      <div className="pagination-section">
        <ul className="pagination">
          <li onClick={handlePreviousPage} className={currentPage === 1 ? 'disabled' : ''}>
            <img src={BtnLast} alt="Previous Page" />
          </li>
          {startPage > 1 && (
            <>
              <li className={currentPage === 1 ? 'active' : ''}>
                <a onClick={() => handlePageChange(1)}>1</a>
              </li>
              {startPage > 2 && <li><span>...</span></li>}
            </>
          )}
          {pageNumbers.map(number => (
            <li key={number} className={currentPage === number ? 'active' : ''}>
              <a onClick={() => handlePageChange(number)}>{number}</a>
            </li>
          ))}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <li><span>...</span></li>}
              <li className={currentPage === totalPages ? 'active' : ''}>
                <a onClick={() => handlePageChange(totalPages)}>{totalPages}</a>
              </li>
            </>
          )}
          <li onClick={handleNextPage} className={currentPage === totalPages ? 'disabled' : ''}>
            <img src={BtnNext} alt="Next Page" />
          </li>
        </ul>
      </div>
    )
  );
};

export default Pagination;
