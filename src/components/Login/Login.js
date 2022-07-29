import React, { useState, useRef } from "react";
import "./login.css";
import {Link, useNavigate} from 'react-router-dom'

function Login() {
  // const passwordRef = useRef(null);
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log({email, password})
    var users = JSON.parse(localStorage.getItem("users")).filter((u) => u.email === email && u.password === password)
    console.log(users)
    if(users.length > 0){
      alert("Login Successful")
      navigate('/welcome')
    }
    else{
      alert("Please enter correct email & password.")
    }
    
    // if(email === 'aj@gmail.com' && password === "1234567890")
    //   navigate('/welcome')
    //   else
    //   alert("Please enter correct email & password.")
  };

  // const passwordChnageHandler = (e) => {
  //   setPassword(e.target.value);
  //   if (e.target.value.length === 0)
  //     passwordRef.current.style.backgroundColor = "white";
  //   else if (e.target.value.length < 5)
  //     passwordRef.current.style.backgroundColor = "red";
  //   else if (e.target.value.length < 10)
  //     passwordRef.current.style.backgroundColor = "orange";
  //   else passwordRef.current.style.backgroundColor = "green";
  // };

  return (
    <div className="login">
      <h2>Login here</h2>
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
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            // ref={passwordRef}
            value={password}
            required
          />
        </label>
        <br />
        <div className="remember-recover"> 
        <input type="checkbox" id="checkbox"/> Remember me
        <a href="" id="recover">Recover Password</a>
        </div>
        
        <br />
        <button type="submit">SIGN IN</button><br /><br/>
        <Link to="/signup">Don't Have an Account? Sign Up here</Link>
      </form>
    </div>
  );
}

export default Login;
