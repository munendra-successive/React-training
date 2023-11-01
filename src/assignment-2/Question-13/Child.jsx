const Child=({increment,count,reset})=>{


    return(
        <>
        <h1>Child Component</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={reset}>Reset</button>
        </>
    )

}

export default Child;