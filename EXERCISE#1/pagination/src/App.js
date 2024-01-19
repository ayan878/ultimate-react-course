import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const MovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0120737",
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings%2C_TFOTR_%282001%29.jpg",
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
  },
  {
    imdbID: "tt0108052",
    Title: "Schindler's List",
    Year: "1993",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
  },
];

function App() {
  const [page, setPage] = useState(1);
  const totalPageCount = 12; // Assuming 12 pages
  const pageLinks = Array.from({ length: totalPageCount }, (_, i) => i + 1);

  const updatePagination = () => {
    const pageLinks = document.querySelectorAll(".pagination");

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
      <div className="movie-container">
        {MovieData.slice((page - 1) * 3, page * 3).map((movie) => (
          <div className="card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </div>
        ))}
      </div>
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
