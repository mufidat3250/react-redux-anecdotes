import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../reducers/notificationSlice";
import { useEffect } from "react";
import {
  initializeAnecdote,
  updateVote,
} from "../reducers/anecdoteReducerSlice";

function AnecdoteList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdote());
  }, [dispatch]);

  const anecdotes = useSelector(({ anecdote, filter }) => {
    return anecdote.filter((anec) =>
      anec.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  console.log(anecdotes);
  const vote = (id, data) => {
    dispatch(updateVote(id, data));
    dispatch(setNotification(`you votted:   ${data.content}`));
    setTimeout(() => {
      dispatch(setNotification(``));
    }, 5000);
  };

  const sortedAnecdote = anecdotes.slice().sort((a, b) => b.votes - a.votes);

  return (
    <>
      {sortedAnecdote.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
