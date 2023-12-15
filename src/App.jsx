import React from "react";
import "./index.css";
import Home from "./Pages/Home/Index";
import { Route, Routes } from "react-router-dom";
import About from "Pages/About";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
