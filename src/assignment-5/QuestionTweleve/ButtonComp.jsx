import { Button } from "@mui/material";

const ButtonComp = ({props}) => {
  const { buttonstyles, handleClick1, handleClick2, handleClick3 } = props;
  return (
    <>
      <Button style={buttonstyles.primary} onClick={handleClick1}>
        Primary
      </Button>
      <Button style={buttonstyles.secondary} onClick={handleClick2}>
        Secondary
      </Button>
      <Button style={buttonstyles.danger} onClick={handleClick3}>
        Danger
      </Button>
    </>
  );
};
export default ButtonComp;
