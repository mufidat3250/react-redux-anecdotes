import React from "react";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationSlice";
import { newAnecdote } from "../reducers/anecdoteReducerSlice";

function AnecdoteForm() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const content = e.target.vote.value;
    e.target.vote.value = "";
    console.log(newAnecdote(content));
    dispatch(newAnecdote(content));
    dispatch(setNotification(`you created ${content}`));
    setTimeout(() => {
      dispatch(setNotification(``));
    }, 1000);
  };

  return (
    <form onSubmit={handleChange}>
      <div>
        <input name="vote" />
      </div>
      <button>create</button>
    </form>
  );
}

export default AnecdoteForm;
