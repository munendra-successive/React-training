/*

12.Create a reusable Button component in React that accepts props 
for different styles (e.g., primary, secondary, danger) and click handlers.
Demonstrate how to use this component in a sample application.

*/

import ButtonComp from "./ButtonComp";
const buttonstyles = {
  primary: {
    backgroundColor: "blue",
    color: "white",
    margin: "10px 10px 10px 10px",
  },
  secondary: {
    backgroundColor: "gray",
    color: "black",
    margin: "10px 10px 10px 10px",
  },
  danger: {
    backgroundColor: "red",
    color: "white",
    margin: "10px 10px 10px 10px",
  },
};
const QuestionTwelve = () => {
  const handleClick1 = () => {
    alert("Primary Button");
  };
  const handleClick2 = () => {
    alert("Secondary Button");
  };
  const handleClick3 = () => {
    alert("Danger Button");
  };
  return (
    <>
      <h4>
        12.Create a reusable Button component in React that accepts props for
        different styles (e.g., primary, secondary, danger) and click handlers.
        Demonstrate how to use this component in a sample application.
      </h4>
      <ButtonComp
        props={{ buttonstyles, handleClick1, handleClick2, handleClick3 }}
      />
    </>
  );
};

export default QuestionTwelve;
