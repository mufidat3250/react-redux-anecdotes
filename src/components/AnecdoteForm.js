import React from "react";
import { useDispatch, connect } from "react-redux";
import { setNotification } from "../reducers/notificationSlice";
import { createNewAnecdote } from "../reducers/anecdoteReducerSlice";

function AnecdoteForm(props) {
  console.log(props);
  const handleChange = async (e) => {
    e.preventDefault();
    const content = e.target.vote.value;
    e.target.vote.value = "";
    props.createNewAnecdote(content);
    props.setNotification(`you created ${content}`);
    setTimeout(() => {
      props.setNotification(``);
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

const mapDispatchToprops = (dispatch) => {
  return {
    setNotification: (value) => {
      dispatch(setNotification(value));
    },
    createNewAnecdote: (value) => {
      dispatch(createNewAnecdote(value));
    },
  };
};
const connectAnecdoteForm = connect(null, mapDispatchToprops)(AnecdoteForm);
export default connectAnecdoteForm;
