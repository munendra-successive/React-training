import React from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { login } = useContext(userAuth);
  const navigate = useNavigate();
  return (
    <>
      {login ? (
        <div>
          <h1>Dashboard</h1>
          <nav>
            <Link to="profile">Profile</Link>
            <Link to="setting">Setting</Link>
          </nav>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate("/")}>Please LogIn</button>
        </div>
      )}
    </>
  );
};
export default Dashboard;
