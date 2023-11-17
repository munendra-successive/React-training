import { useState } from "react";

/*

2.Build a form that includes various input fields like text inputs, checkboxes, and radio buttons.
Ensure that each input is a controlled component. When the user submits the form, log the form data to the console.

*/

const QuestionTwo = () => {
  const [details, setdetails] = useState({
    name: "",
    gender: "male",
    check: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if(details.name){
    console.log(details.name);
    console.log(details.gender);
    console.log(details.check);}
    setdetails({name:'',gender:'male',check:false})
  };

  const handleChange = (event) => {
    const { value, name, type } = event.target;
    const newValue = type === "checkbox" ? !details.check : value;
    setdetails((preValue) => ({ ...preValue, [name]: newValue }));
  };

  return (
    <>
      <h4>
        2.Build a form that includes various input fields like text inputs,
        checkboxes, and radio buttons. Ensure that each input is a controlled
        component. When the user submits the form, log the form data to the
        console.
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Name"
          name="name"
          value={details.name}
        />
        <label>Check for subscribe</label>
        <input
          type="checkbox"
          onChange={handleChange}
          name="check"
          checked={details.check}
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={details.gender === "male"}
          onChange={handleChange}
        />
        <label>Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={details.gender === "female"}
          onChange={handleChange}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default QuestionTwo;
