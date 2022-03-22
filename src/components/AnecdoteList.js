import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteUpdate } from "../reducers/anecdoteReducerSlice";
import { setNotification } from "../reducers/notificationSlice";
function AnecdoteList() {
  const anecdotes = useSelector(({ anecdote, filter }) => {
    return anecdote.filter((anec) =>
      anec.content.toLowerCase().includes(filter.toLowerCase())
    );
  });
  const dispatch = useDispatch();
  const vote = (id, content) => {
    dispatch(voteUpdate(id));
    dispatch(setNotification(`you votted:   ${content}`));
    setTimeout(() => {
      dispatch(setNotification(``));
    }, 5000);
  };
  console.log({ anecdotes });
  const sortedAnecdote = anecdotes.slice().sort((a, b) => b.votes - a.votes);

  return (
    <>
      {sortedAnecdote.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
