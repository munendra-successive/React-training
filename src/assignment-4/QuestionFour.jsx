/*

4.Build a registration form with two password fields. Implement controlled components for both password inputs. 
Add a validation rule to ensure that the two passwords match before allowing the form submission.

*/
import React, { useEffect, useState } from "react";

const QuestionFour = () => {
  const [pass, setPass] = useState({ pass1: "", pass2: "" });
  const [isSubmit, setSubmit] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPass((preValue) => ({ ...preValue, [name]: value }));
  };
  useEffect(() => {
    if (pass.pass1 && pass.pass2 && pass.pass1 === pass.pass2) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [pass]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password1"
          value={pass.pass1}
          name="pass1"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Password2"
          value={pass.pass2}
          name="pass2"
        />
        <button disabled={isSubmit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default QuestionFour;
