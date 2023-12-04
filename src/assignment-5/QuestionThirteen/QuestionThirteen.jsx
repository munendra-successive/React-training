import ModalComp from "./ModalComp";

const text = {
  home: "This is Home Modal",
  about: "This About Modal",
  contact: "This is Contact Modal",
};
const QuestionThirteen = () => {
  return (
    <>
      <h4>
        13.Design and implement a Modal component in React. Allow customization
        of the modal content and provide options to open, close, and toggle the
        modal. Use this component to display various types of content.
      </h4>
      <ModalComp {...text} />
    </>
  );
};
export default QuestionThirteen;
