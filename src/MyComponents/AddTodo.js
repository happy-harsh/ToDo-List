import React from "react";
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    e.preventDefault(); // helps to not reload the page
    if (!title || !desc) {
      alert("Title and Description cannot be blank");
    }
    addTodo(title, desc);
  };
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group my-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            placeholder="Enter Your Todo Description"
          />
        </div>
        <button type="submit" className="btn  my-3 btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
