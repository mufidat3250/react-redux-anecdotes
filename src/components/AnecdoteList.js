import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { setNotification } from "../reducers/notificationSlice";
import { useEffect } from "react";
import {
  initializeAnecdote,
  updateVote,
} from "../reducers/anecdoteReducerSlice";

function AnecdoteList(props) {
  const { anecdote, filter, setNotification } = props;

  useEffect(() => {
    props.initializeAnecdote();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const FilteredAnecdote = anecdote.filter((anec) =>
    anec.content.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(FilteredAnecdote);

  // const anecdotes = useSelector(({ anecdote, filter }) => {
  //   return anecdote.filter((anec) =>
  //     anec.content.toLowerCase().includes(filter.toLowerCase())
  //   );
  // });

  const vote = (id, data) => {
    props.updateVote(id, data);
    setNotification(`you votted:   ${data.content}`);
    setTimeout(() => {
      setNotification(``);
    }, 5000);
  };

  const sortedAnecdote = FilteredAnecdote.slice().sort(
    (a, b) => b.votes - a.votes
  );

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

const mapStateToprops = (state) => {
  return state;
};

const mapDispatchToprops = (dispatch) => {
  return {
    setNotification: (value) => {
      dispatch(setNotification(value));
    },
    updateVote: (id, data) => {
      dispatch(updateVote(id, data));
    },
    initializeAnecdote: () => {
      dispatch(initializeAnecdote());
    },
  };
};

const connectAnecdoteList = connect(
  mapStateToprops,
  mapDispatchToprops
)(AnecdoteList);
export default connectAnecdoteList;
