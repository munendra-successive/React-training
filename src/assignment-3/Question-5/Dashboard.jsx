import React from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../assignment-3";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { login } = useContext(UserAuthContext);
  const navigate = useNavigate();
  return (
    <>
      {login ? (
        <div>
          <h1>Dashboard</h1>
          <nav>
            <Link to="/assignment3/question4/dashboard/profile">Profile</Link>
            <Link to="/assignment3/question4/dashboard/setting">Setting</Link>
          </nav>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate("/assignment3/question4/")}>
            Please LogIn
          </button>
        </div>
      )}
    </>
  );
};
export default Dashboard;
