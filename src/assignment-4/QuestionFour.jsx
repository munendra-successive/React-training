/*

4.Build a registration form with two password fields. Implement controlled components for both password inputs. 
Add a validation rule to ensure that the two passwords match before allowing the form submission.

*/
import React, { useEffect, useState } from "react";

const QuestionFour = () => {
  const [password, setPass] = useState({ passwordOne: "", passwordTwo: "" });
  const [isSubmit, setSubmit] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPass((preValue) => ({ ...preValue, [name]: value }));
  };
  useEffect(() => {
    if (
      password.passwordOne &&
      password.passwordTwo &&
      password.passwordOne === password.passwordTwo
    ) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  }, [password]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h4>
        4.Build a registration form with two password fields. Implement
        controlled components for both password inputs. Add a validation rule to
        ensure that the two passwords match before allowing the form submission.
      </h4>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="password"
          placeholder="PasswordOne"
          value={password.passwordOne}
          name="passwordOne"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="PasswordTwo"
          value={password.passwordTwo}
          name="passwordTwo"
        />
        <button disabled={isSubmit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default QuestionFour;
