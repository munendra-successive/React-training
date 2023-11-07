import { useReducer } from "react";

/* 

12.Create a simple voting application using the useReducer hook.
Set up a reducer to manage the votes for different options.
Create buttons representing voting options.
Use the useReducer hook to access the votes state and dispatch actions.
Allow users to vote for their preferred options.
Display the current vote count for each option.

*/

const parties = {
  partyA: 0,
  partyB: 0,
};

const reducer = (state, action) => {
  if (action.type === "party1") {
    return { ...state, partyA: state.partyA + 1 };
  } else if (action.type === "party2") {
    return { ...state, partyB: state.partyB + 1 };
  }
  return state;
};

const Voting = () => {
  const [state, dispatch] = useReducer(reducer, parties);

  return (
    <div>
      <h4>
        12.Create a simple voting application using the useReducer hook. Set up
        a reducer to manage the votes for different options. Create buttons
        representing voting options. Use the useReducer hook to access the votes
        state and dispatch actions. Allow users to vote for their preferred
        options. Display the current vote count for each option.
      </h4>
      <button onClick={() => dispatch({ type: "party1" })}>
        Vote for Party1
      </button>
      <button onClick={() => dispatch({ type: "party2" })}>
        Vote for Party2
      </button>
      <p>Party1 Votes: {state.partyA}</p>
      <p>Party2 Votes: {state.partyB}</p>
    </div>
  );
};

export default Voting;
