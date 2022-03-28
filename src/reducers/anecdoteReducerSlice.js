import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";
// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

const generateId = () => {
  return Math.random().toString(36).substring(0, 7);
};
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: generateId(),
    votes: 0,
  };
};

// const initialState = anecdotesAtStart.map(asObject);

const anecdoteslice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    newAnecdote(state, action) {
      state.push(action.payload);
    },
    voteUpdate(state, action) {
      const updatedBlog = action.payload;
      // const voteChange = state.find((s) => s.id === updatedBlog.id);
      // const changedVote = { ...voteChange, votes: updatedBlog.votes };

      return state.map((anecdote) =>
        anecdote.id !== updatedBlog.id ? anecdote : updatedBlog
      );
    },
    setAnecdote(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
  },
});

export const { newAnecdote, voteUpdate, setAnecdote, appendAnecdote } =
  anecdoteslice.actions;

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.getAll();
    dispatch(setAnecdote(anecdote));
  };
};

export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateVote = (id, data) => {
  return async (dispatch) => {
    const result = await anecdoteService.update(id, data);
    dispatch(voteUpdate(result));
  };
};

export default anecdoteslice.reducer;
