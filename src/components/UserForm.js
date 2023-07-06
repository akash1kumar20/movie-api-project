import React, { useState } from "react";
import classes from "./UserForm.module.css";
export default function UserForm() {
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
    console.log(NewMovieObj);
  };
  return (
    <div>
      <form onSubmit={userFormData}>
        <div className={classes.title}>
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
        <div className={classes.title}>
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
        <div className={classes.title}>
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
