import React from "react";
import classes from "./Movie.module.css";

const Movie = (props) => {
  function movieDelete() {
    fetch(
      " https://react-movie-project-c8d34-default-rtdb.firebaseio.com/movies.json",
      {
        method: "DELETE",
      }
    );
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button className={classes.button} onClick={movieDelete}>
        Delete Movie
      </button>
    </li>
  );
};

export default Movie;
