import React, { useState } from "react";
import classes from "./UserForm.module.css";
export default function UserForm(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const titleFn = (event) => {
    setTitle(event.target.value);
  };
  const textFn = (event) => {
    setText(event.target.value);
  };
  const dateFn = (event) => {
    setDate(event.target.value);
  };
  const userFormData = (event) => {
    event.preventDefault();
    const NewMovieObj = {
      mtitle: title,
      mtext: text,
      mdate: date,
    };
    props.onAddMovies(NewMovieObj);
    setDate("");
    setText("");
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={userFormData}>
        <div className={classes.control}>
          <label htmlFor="mtitle">Title</label>
          <br></br>
          <input
            type="text"
            id="mtitle"
            required
            value={title}
            onChange={titleFn}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="mopening">Opening Text</label>
          <br></br>
          <input
            type="text"
            id="mopening"
            required
            value={text}
            onChange={textFn}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="mdate">Releasing Date</label>
          <br></br>
          <input
            type="date"
            id="mdate"
            required
            value={date}
            onChange={dateFn}
          ></input>
        </div>
        <div className={classes.title}>
          <button type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
}
