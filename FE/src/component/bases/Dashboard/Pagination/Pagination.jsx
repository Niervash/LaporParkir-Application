import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 2;

    if (totalPages <= maxPagesToShow) {
      // Show all page numbers if total pages are less than or equal to max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-4 py-2 ${
              currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-lg mx-1`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show first page
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`px-4 py-2 ${
            currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded-lg mx-1`}
        >
          1
        </button>
      );

      // Add ellipsis if necessary
      if (currentPage > 3) {
        pages.push(
          <span key="ellipsis1" className="px-4 py-2">
            ...
          </span>
        );
      }

      // Show current and surrounding pages
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`px-4 py-2 ${
              currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-lg mx-1`}
          >
            {i}
          </button>
        );
      }

      // Add ellipsis if necessary
      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="ellipsis2" className="px-4 py-2">
            ...
          </span>
        );
      }

      // Show last page
      if (totalPages > 1) {
        pages.push(
          <button
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className={`px-4 py-2 ${
              currentPage === totalPages
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } rounded-lg mx-1`}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div>
      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
        >
          <GrPrevious />
        </button>
        {renderPageNumbers()}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2"
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};
