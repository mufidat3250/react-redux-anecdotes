import React from "react";
import { useDispatch } from "react-redux";
import { setNotification } from "../reducers/notificationSlice";
import { newAnecdote } from "../reducers/anecdoteReducerSlice";
import anecdoteService from "../services/anecdotes";

function AnecdoteForm() {
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    e.preventDefault();
    const content = e.target.vote.value;
    e.target.vote.value = "";
    console.log(newAnecdote(content));
    const newAnc = await anecdoteService.createNew(content);
    console.log(newAnc);
    dispatch(newAnecdote(newAnc));
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
