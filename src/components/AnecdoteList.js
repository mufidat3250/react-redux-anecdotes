import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteUpdate } from "../reducers/anecdoteReducerSlice";
import { setNotification } from "../reducers/notificationSlice";
import { useEffect } from "react";
import anecdoteService from "../services/anecdotes";
import { newAnecdote, setAnecdote } from "../reducers/anecdoteReducerSlice";

function AnecdoteList() {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService.getAll().then((res) => dispatch(setAnecdote(res)));
  }, [dispatch]);

  // const anecdotes = useSelector(({ anecdote, filter }) => {
  //   console.log(anecdote);
  //   return anecdote.filter((anec) =>
  //     anec.content.toLowerCase().includes(filter.toLowerCase())
  //   );
  // });

  const anecdotes = useSelector(({ anecdote }) => anecdote);
  console.log(anecdotes);

  const vote = (id, content) => {
    dispatch(voteUpdate(id));
    dispatch(setNotification(`you votted:   ${content}`));
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
