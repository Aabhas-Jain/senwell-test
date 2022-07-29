import "./App.css";
import Login from "./components/Login/Login";
import { useState } from "react";
import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <img src="https://static.thenounproject.com/png/698781-200.png"></img>
          <h1>NSOC Dashboard</h1>
          <h6>Magic levarage cyber world class</h6>
        </div>
        <div className="right">
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/welcome" element={<Welcome />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
