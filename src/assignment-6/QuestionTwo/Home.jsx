import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    throw new Error("Error");
  }, []);
  return (
    <>
      <h4>"This is the Home Page"</h4>
    </>
  );
};

export default Home;
