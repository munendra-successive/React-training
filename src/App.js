import { Route, Routes } from "react-router-dom";
import Home from "./assignment-3/Question-6/Home";
import "./App.css";
import ProductDetail from "./assignment-3/Question-6/ProductDetail";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
    </Routes>
    </>
  );
}

export default App;
