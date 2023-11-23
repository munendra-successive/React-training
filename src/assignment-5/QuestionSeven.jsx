/*

7.Create a form in your React component that allows the user to input data (e.g., a post title and content). 
Use Axios to send a POST request to an API endpoint, posting the user's data.

*/
import axios from "axios";
import { useState } from "react";

const QuestionSeven = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const Send = () => {
    const data = axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: title,
      content: content,
    });
    console.log(data);
    setTitle("")
    setContent("")
  };
  return (
    <>
      <h4>
        7.Create a form in your React component that allows the user to input
        data (e.g., a post title and content). Use Axios to send a POST request
        to an API endpoint, posting the user's data.
      </h4>
      <input
        type="text"
        placeholder="Enter title of data"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter content of data"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button onClick={Send}>Send Data</button>
    </>
  );
};

export default QuestionSeven;
