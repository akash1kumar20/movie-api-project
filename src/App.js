import React, { useState, useCallback, useEffect } from "react";
import UserForm from "./components/UserForm";
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
      const response = await fetch(
        "https://react-movie-project-c8d34-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
      const data = await response.json();

      const loadedMovie = [];
      for (const key in data) {
        loadedMovie.push({
          id: key,
          title: data[key].mtitle,
          openingText: data[key].mtext,
          releaseDate: data[key].mdate,
        });
      }
      setMovies(loadedMovie);
      //fetch function is available by browser for api call
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

  async function movieFormHandler(NewMovieObj) {
    const response = await fetch(
      "https://react-movie-project-c8d34-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(NewMovieObj),
        headers: {
          "Content-Type": "application/json",
        },
        //headers needed in some data base only.
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <React.Fragment>
      <section>
        <UserForm onAddMovies={movieFormHandler} />
      </section>
      <section>
        <button onClick={movieData}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
