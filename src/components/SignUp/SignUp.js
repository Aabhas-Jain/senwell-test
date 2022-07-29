import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    var storedUsers = JSON.parse(localStorage.getItem("users"));
    console.log(storedUsers);
    console.log({ email, password, confirmPassword });
    if (password === confirmPassword) {
      let user = { email: email, password: password };
      if (!storedUsers) {
        let users = [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        let users = storedUsers.filter((u) => u.email === email);
        console.log({users})
        if (users.length>0) {
          alert("User already registered, redirecting to login page.");
          navigate("/login");
        } else {
          storedUsers.push(user);
          localStorage.setItem("users", JSON.stringify(storedUsers));
          alert("User successfully registered, redirecting to login page.");
          navigate("/login");
        }
      }
    }
    console.log("Checking");
  }

  const passwordChnageHandler = (e) => {
    if (e.target.value.length === 0) e.target.style.backgroundColor = "white";
    else if (e.target.value.length < 5) e.target.style.backgroundColor = "red";
    else if (e.target.value.length < 10)
      e.target.style.backgroundColor = "orange";
    else e.target.style.backgroundColor = "green";

    if (e.target.id === "passwordInput") setPassword(e.target.value);
    else setConfirmPassword(e.target.value);
  };

  return (
    <div className="SignUp">
      <h2>SignUp here</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <p>Your email</p>{" "}
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>{" "}
          <input
            className="input"
            type="password"
            placeholder="Set your password"
            onChange={passwordChnageHandler}
            value={password}
            required
            id="passwordInput"
          />
        </label>
        <label htmlFor="confirmPassword">
          <p>Confirm Password</p>{" "}
          <input
            className="input"
            type="password"
            placeholder="Set your password again"
            onChange={passwordChnageHandler}
            value={confirmPassword}
            required
          />
        </label>
        <br />
       
        <button id="signup-button" type="submit">SIGN UP</button>
      </form>
    </div>
  );
}

export default SignUp;
