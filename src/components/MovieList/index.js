import React, { useEffect } from "react";

const MovieListPage = () => {
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
        console.log(data); // Displaying the fetched movie data in the console
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div>
      <h1>Welcome to Movies Page!</h1>
    </div>
  );
};

export default MovieListPage;
