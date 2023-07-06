import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  async function movieData() {
    setLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
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
    setLoading(false);
    //once the setMoives function is completed, we don't want to excute the setLoading function
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={movieData}>Fetch Movies</button>
      </section>
      <section>
        {!loading && <MoviesList movies={movie} />}
        {!loading && movie.length === 0 && <p>No Movies Found</p>}

        {loading && <p>Bus bhai 1 min me aa rha hu...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
