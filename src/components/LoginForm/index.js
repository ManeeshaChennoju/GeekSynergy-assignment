import React, { useState } from "react";
import "./index.css";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Retrieve userData from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (
      userData &&
      userData.name === loginData.name &&
      userData.password === loginData.password
    ) {
      alert("Login Successful!");
      // Navigate to the MovieList component
      // You can use react-router-dom or conditional rendering to achieve this.
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
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
  );
};

export default LoginForm;
