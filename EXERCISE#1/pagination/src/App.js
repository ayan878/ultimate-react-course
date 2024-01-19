import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function App() {
  const [page, setPage] = useState(1);
  const totalPageCount = 12; // Assuming 12 pages
  const pageLinks = Array.from({ length: totalPageCount }, (_, i) => i + 1);

  const updatePagination = () => {
    const pageLinksContainer = document.getElementById("page-links-container");
    const pageLinks = pageLinksContainer.getElementsByClassName("page-link");

    Array.from(pageLinks).forEach((link, index) => {
      const pageNumber = index + 1;
      link.classList.toggle("active", pageNumber === page);
    });
  };

  const handleNext = () => {
    if (page < totalPageCount) {
      setPage((prevPage) => prevPage + 1);
      updatePagination();
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      updatePagination();
    }
  };

  return (
    <>
      <div className="pagination">
        <button className="btn" onClick={handlePrev} disabled={page === 1}>
          <FaChevronLeft />
        </button>
          {pageLinks.map((link) => (
            <a
              href={`#page-link-${link}`}
              id={`page-link-${link}`}
              className={`page-link ${link === page ? "active" : ""}`}
              key={link}
            >
              {link}
            </a>
          ))}

        <button
          className="btn"
          onClick={handleNext}
          disabled={page === totalPageCount}
        >
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}

export default App;
