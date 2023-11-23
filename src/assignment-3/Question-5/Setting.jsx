import { useNavigate } from "react-router-dom";
const Setting = () => {
  const navigate = useNavigate();
  return (
    <>
      <h4>This is Setting Section</h4>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
};

export default Setting;
