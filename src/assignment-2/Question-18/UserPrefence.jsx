import useLocalStorage from "./useLocalStorage";

/*

18.Design a custom hook named useLocalStorage to interact with local storage.
Create a useLocalStorage hook that allows storing and retrieving data from local storage.
Implement methods for setting, getting, and removing data using the hook.
Utilize the localStorage API within the hook to manage data.
Develop a component that uses the useLocalStorage hook to manage user preferences.

*/

const UserPrefence = () => {
  const [value, setValue, removeValue] = useLocalStorage("userPrefence", {
    darkMode: false,
    language: "en",
  });

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
      <h2>UserPrefence</h2>
      <label>
        DarkMode:
        <input
          type="checkbox"
          checked={value.darkMode}
          onChange={(e) => {
            setValue({ ...value, darkMode: e.target.checked });
          }}
        />
      </label>
      <br />
      <label>
        Language:
        <select
          value={value.language}
          onChange={(e) => setValue({ ...value, language: e.target.value })}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </label>
      <button onClick={removeValue}>Reset Prefence</button>
    </>
  );
};
export default UserPrefence;
