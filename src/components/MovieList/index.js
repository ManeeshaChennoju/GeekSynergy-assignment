import React, { useEffect, useState } from "react";
import "./index.css";

const MovieListPage = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch("https://hoblist.com/api/movieList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }

        const data = await response.json();
        console.log(data);
        setMoviesData(data.result);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div>
      <h1>Welcome to Movies Page!</h1>
      <div className="movies-container">
        {moviesData.map((movie) => (
          <div key={movie.title} className="movie-card">
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Director: {movie.director}</p>
            <p>Starring: {movie.stars}</p>
            <p>Views: {movie.pageViews}</p>
            <p>Votes: {movie.totalVoted}</p>
            <p>
              Released Date:
              {new Date(movie.releasedDate * 1000).toLocaleDateString()}
            </p>
            <p>Runtime: {movie.runTime} min</p>
            <img
              src={movie.poster}
              alt={movie.title}
              className="movie-poster"
            />
            <button className="watch-trailer-btn">Watch Trailer</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListPage;

// import React, { useEffect, useState } from "react";
// import "./index.css"; // Import the CSS file for styling

// const MovieListPage = () => {
//   const [moviesData, setMoviesData] = useState([]);

//   useEffect(() => {
//     const fetchMovieData = async () => {
//       try {
//         const response = await fetch("https://hoblist.com/api/movieList", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             category: "movies",
//             language: "kannada",
//             genre: "all",
//             sort: "voting",
//           }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch movie data");
//         }

//         const data = await response.json();
//         setMoviesData(data.result); // Extracting the result array and storing it in state
//       } catch (error) {
//         console.error("Error fetching movie data:", error);
//       }
//     };

//     fetchMovieData();
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to Movies Page!</h1>
//       <div className="movies-container">
//         {" "}
//         {/* Add a container class for the movie list */}
//         {moviesData.map((movie) => (
//           <div key={movie.id} className="movie-card">
//             {" "}
//             {/* Add a class for movie cards */}
//             <h2>{movie.title}</h2>
//             <p>Genre: {movie.genre}</p>
//             <p>Director: {movie.director}</p>
//             <p>Starring: {movie.stars}</p>
//             <p>Views: {movie.views ? movie.views : "N/A"}</p>{" "}
//             {/* Check for valid views */}
//             <p>Votes: {movie.total_votes ? movie.total_votes : "N/A"}</p>{" "}
//             {/* Check for valid votes */}
//             <p>Released Date: {movie.released}</p>
//             <p>Runtime: {movie.runtime}</p>
//             <img
//               src={movie.poster}
//               alt={movie.title}
//               className="movie-poster"
//             />{" "}
//             {/* Add a class for movie posters */}
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieListPage;

// import React, { useEffect } from "react";

// const MovieListPage = () => {
//   useEffect(() => {
//     const fetchMovieData = async () => {
//       try {
//         const response = await fetch("https://hoblist.com/api/movieList", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             category: "movies",
//             language: "kannada",
//             genre: "all",
//             sort: "voting",
//           }),
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch movie data");
//         }

//         const data = await response.json();
//         console.log(data); // Displaying the fetched movie data in the console
//       } catch (error) {
//         console.error("Error fetching movie data:", error);
//       }
//     };

//     fetchMovieData();
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to Movies Page!</h1>
//     </div>
//   );
// };

// export default MovieListPage;
