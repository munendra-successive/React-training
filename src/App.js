import "./App.css";
import { Assignment1 } from "./assignment-1/assignment-1";
import { Assignment2 } from "./assignment-2/assignment-2";
import { Assignment3 } from "./assignment-3/assignment-3";
import { Assignment4 } from "./assignment-4/assignment-4";
import { Assignment5 } from "./assignment-5/assignment-5";
import { Assignment6 } from "./assignment-6/assignment-6";
import { Outlet, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav class="navbar">
        <Link to="/assignment1/">Assignment1</Link>
        <Link to="/assignment2/">Assignment2</Link>
        <Link to="/assignment3/">Assignment3</Link>
        <Link to="/assignment4/">Assignment4</Link>
        <Link to="/assignment5/">Assignment5</Link>
        <Link to="/assignment6/">Assignment6</Link>
      </nav>

      <Routes>
        <Route path="/assignment1/*"     element={<Assignment1 />} />

        <Route path="/assignment2/*" element={<Assignment2 />} />

        <Route path="/assignment3/*" element={<Assignment3 />} />

        <Route path="/assignment4/*" element={<Assignment4 />} />

        <Route path="/assignment5/*" element={<Assignment5 />} />

        <Route path="/assignment6/*" element={<Assignment6 />} />
      </Routes>

      <Outlet />
    </>
  );
}

export default App;
