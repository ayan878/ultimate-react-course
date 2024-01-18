import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function App() {
  const [page, setPage] = useState(1);
  const pageLinks = Array.from({ length: 12 }, (_, i) => i + 1);
  const anchorRefs = pageLinks.map(() => useRef(null));

  const handleNext = () => {
    if (page < 12) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    anchorRefs[page - 1].current.focus();
  }, [page]);

  return (
    <>
      <div className="pagination">
        <button className="btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        {pageLinks.map((link, index) => (
          <a
            ref={anchorRefs[index]}
            href={`#page-link-${link}`}
            id={`page-link-${link}`}
            className="page-link"
            key={link}
          >
            {link}
          </a>
        ))}
        <button className="btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}

export default App;
