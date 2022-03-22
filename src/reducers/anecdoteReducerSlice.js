import { createSlice } from "@reduxjs/toolkit";
const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

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

const initialState = anecdotesAtStart.map(asObject);

const anecdoteslice = createSlice({
  name: "anecdote",
  initialState,
  reducers: {
    newAnecdote(state, action) {
      let content = action.payload;
      state.push({
        content: content,
        id: generateId(),
        votes: 0,
      });
    },
    voteUpdate(state, action) {
      const id = action.payload;
      const voteChange = state.find((s) => s.id === id);
      const changedVote = { ...voteChange, votes: voteChange.votes + 1 };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedVote
      );
    },
  },
});

export const { newAnecdote, voteUpdate } = anecdoteslice.actions;
export default anecdoteslice.reducer;
