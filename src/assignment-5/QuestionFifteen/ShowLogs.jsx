const ShowLogs = (props) => {
    const { setCount, state, setState, count } = props.value;
    return (
      <>
        <h4>
          15.Build an HOC called withLogger that logs the events of a component
          (e.g., mounting, unmounting, updating). Apply this HOC to a component
          and display the logs in the browser console.
        </h4>
        <button onClick={() => setCount(count + 1)}>count</button>
        <button onClick={() => setState(!state)}>UnMount</button>
      </>
    );
  };
  export default ShowLogs;