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
  const [query, setQuery] = useState(null);
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

      <ul>
        {filterd.length === 0
          ? items.map((item, index) => (
              <>
                <h4>User {index + 1}</h4>
                <li key={index}>Id: {item.id}</li>
                <li>Username: {item.username}</li>
                <li>Email: {item.email}</li>
                <li>Name: {item.name}</li>
              </>
            ))
          : filterd.map((item, index) => (
              <>
                <li key={index}>Id: {item.id}</li>
                <li>Username: {item.username}</li>
                <li>Email: {item.email}</li>
                <li>Name: {item.name}</li>
              </>
            ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Enter username"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default QuestionSeven;
