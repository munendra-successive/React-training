import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

/*

18.Design a custom hook named useLocalStorage to interact with local storage.
Create a useLocalStorage hook that allows storing and retrieving data from local storage.
Implement methods for setting, getting, and removing data using the hook.
Utilize the localStorage API within the hook to manage data.
Develop a component that uses the useLocalStorage hook to manage user preferences.

*/

const UseLocal = () => {
  const [key, setKey] = useState("");
  const [value, setValue1] = useState("");
  const [receiveKey, setReceiveKey] = useState("");
  const [deleteKey, setDeleteKey] = useState("");
  const [receivedValue, setReceivedValue] = useState("");
  const [getValue, setValue, removeValue] = useLocalStorage();
  const handleClearInput = () => {
    setKey("");
    setValue1("");
    setReceiveKey("");
    setDeleteKey("");
  };
  const handleGet = () => {
    setReceivedValue(getValue(receiveKey));
    handleClearInput();
  };
  const handleDelete = () => {
    removeValue(deleteKey);
    handleClearInput();
  };
  const handleSet = () => {
    setValue(key, value);
    handleClearInput();
  };

  return (
    <>
      <h4>
        18.Design a custom hook named useLocalStorage to interact with local
        storage. Create a useLocalStorage hook that allows storing and
        retrieving data from local storage. Implement methods for setting,
        getting, and removing data using the hook. Utilize the localStorage API
        within the hook to manage data. Develop a component that uses the
        useLocalStorage hook to manage user preferences.
      </h4>
      <h4>Set Item in localStorage</h4>
      <input
        placeholder="Enter Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        type="text"
      />
      <input
        placeholder="Enter Value"
        value={value}
        onChange={(e) => setValue1(e.target.value)}
        type="text"
      />
      <button onClick={handleSet}>Submit</button>

      <h4>Get item from localStorage</h4>
      <input
        placeholder="Enter Key"
        value={receiveKey}
        onChange={(e) => setReceiveKey(e.target.value)}
        type="text"
      />
      <button onClick={handleGet}>Submit</button>
      <h4>Value: {receivedValue}</h4>

      <h4>Delete Item from localStorage</h4>
      <input
        placeholder="Enter Key"
        value={deleteKey}
        onChange={(e) => setDeleteKey(e.target.value)}
        type="text"
      />
      <button onClick={handleDelete}>Submit</button>
    </>
  );
};
export default UseLocal;
