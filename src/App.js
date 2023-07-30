import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
