import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
function App() {
  const [page, setPage] = useState(1);
  const pageLinks = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleNext = () => {
    if (page < 23) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const handlePrev = () => {
    if (page > 23) {
      setPage((nextPage) => nextPage + 1);
    }
  };
  return (
    <>
      <div className="pagination">
        <button className="btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        {pageLinks.map((link) => (
          <a
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
