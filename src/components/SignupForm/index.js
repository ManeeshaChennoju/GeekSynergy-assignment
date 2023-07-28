import React, { useState } from "react";
import "./index.css";

const SignupForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
    phoneNumber: "",
    profession: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Save userData to local storage
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup Successful! Please proceed to login.");
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Profession:</label>
          <select name="profession" onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Engineer">Engineer</option>
            {/* Add other profession options here */}
          </select>
        </div>
        <button type="button" onClick={handleSubmit}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
