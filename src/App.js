import React, { useState, useCallback, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const movieData = useCallback(async () => {
    setLoading(true);
    setError(null);
    //to clear the previous error
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
      const data = await response.json();
      const transformedMovies = data.results.map((item) => {
        return {
          id: item.episode_id,
          title: item.title,
          openingText: item.opening_crawl,
          releaseDate: item.release_date,
        };
      });
      setMovies(transformedMovies);
      //function available by browser for fetch api call
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    //once the setMoives function is completed, we don't want to excute the setLoading function
  }, []);

  useEffect(() => {
    movieData();
  }, [movieData]);

  let content = <p>No Movies Found</p>;
  if (movie.length > 0) {
    content = <MoviesList movies={movie} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (loading) {
    content = <p>Bus bhai 1 min me aa rha hu...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={movieData}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
