import React, { useState } from "react";
import "./index.css";
import MovieList from "../MovieList";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable to track login status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Retrieving userData from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      userData &&
      userData.name === loginData.name &&
      userData.password === loginData.password
    ) {
      alert("Login Successful!");
      setIsLoggedIn(true); // Set isLoggedIn to true after successful login
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      {isLoggedIn ? ( // Conditionally render the MovieList component when isLoggedIn is true
        <MovieList />
      ) : (
        <div className="form-container">
          <h2>User Login</h2>
          <form>
            <div>
              <label>Name:</label>
              <br />
              <input type="text" name="name" onChange={handleChange} required />
            </div>
            <div>
              <label>Password:</label>
              <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
