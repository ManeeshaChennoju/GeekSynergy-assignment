import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Routes
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import MovieList from "./components/MovieList";
import CompanyInfo from "./components/CompanyInfo";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="link-item">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className="link-item">
                Login
              </Link>
            </li>
            <li>
              <Link to="/movies" className="link-item">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/company-info" className="link-item">
                Company Info
              </Link>
            </li>
          </ul>
        </nav>
        <div className="routes_container">
          <Routes>
            <Route path="/" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/company-info" element={<CompanyInfo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
