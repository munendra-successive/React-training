import { useEffect, useState } from "react";

/*

7.Design a search filter component that consists of an input field. 
As the user types into the input, use controlled components to filter a list of items displayed below.
The list should dynamically update to show only items matching the search query.

*/
const items = [
  {
    id: 1,
    name: "Monu Graham",
    username: "Monu",
    email: "Monu@april.biz",
  },
  {
    id: 2,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
];
const QuestionSeven = () => {
  const [query, setQuery] = useState("");
  const [filterd, setFiltered] = useState([]);
  useEffect(() => {
    const newfilterd = items.filter((item) => item.username === query);
    setFiltered(newfilterd);
  }, [query]);

  return (
    <>
      <h4>
        7.Design a search filter component that consists of an input field. As
        the user types into the input, use controlled components to filter a
        list of items displayed below. The list should dynamically update to
        show only items matching the search query.
      </h4>
      <input
        type="text"
        placeholder="Enter username"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {filterd.map((item, index) => (
        <ul>
          <li key={index}>Id: {item.id}</li>
          <li>Username: {item.username}</li>
          <li>Email: {item.email}</li>
          <li>Name: {item.name}</li>
        </ul>
      ))}
    </>
  );
};

export default QuestionSeven;
