// import { useState, useEffect } from "react";

// const KEY = "c87bce4d";

// export function useMovies(query) {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const controller = new AbortController();
//     const fetchMovies = async () => {
//       try {
//         setIsLoading(true);
//         setError("");

//         const res = await fetch(
//           `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
//           { signal: controller.signal }
//         );

//         if (!res.ok) {
//           throw new Error("Something went wrong with fetching movies");
//         }

//         const data = await res.json();

//         // if (data.Response === "False") {
//         //   throw new Error("Movie not found");
//         // }
//         if (!data || data.Response === "False" || !data.Search) {
//           throw new Error("Movie not found");
//         }

//         setMovies(data.Search);
//         setError("");
//       } catch (error) {
//         if (error.name !== "AbortError") {
//           setError(error.message);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     if (query.length < 3) {
//       setMovies([]);
//       setError("");
//       return;
//     }
//     // handleCloseMovie();
//     fetchMovies();
//     return () => {
//       controller.abort();
//     };
//   }, [query]);
//   return{movies,isLoading,error};
// }