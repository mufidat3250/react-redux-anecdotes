import { useSelector, useDispatch } from "react-redux";
import reducer, {
  votingAnecdotes,
  newAnecdote,
} from "./reducers/anecdoteReducer";

// console.log(newAnecdote());
// console.log(votingAnecdotes);
const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    return dispatch(votingAnecdotes(id));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const content = e.target.vote.value;
    e.target.vote.value = "";
    console.log(newAnecdote(content));
    dispatch(newAnecdote(content));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={handleChange}>
        <div>
          <input name="vote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
