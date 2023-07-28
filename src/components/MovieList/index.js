import React, { useEffect, useState } from "react";
import "./index.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      //   try {
      //     const response = await fetch("https://hoblist.com/api/movieList");
      //     const data = await response.json();
      //     console.log(data);
      //     setMovies(data.movies);
      //   } catch (error) {
      //     console.error("Error fetching movie data:", error);
      //   }
      try {
        const response = await fetch("https://hoblist.com/api/movieList");

        if (!response.ok) {
          throw new Error(
            `Failed to fetch movie data: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log(data);
        setMovies(data.movies);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div className="movie-list-container">
      <h2>Movie List</h2>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong>
            <p>Genre: {movie.genre}</p>
            <p>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
