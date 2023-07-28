import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Routes
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import MovieList from "./components/MovieList";
import CompanyInfo from "./components/CompanyInfo";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/company-info">Company Info</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Wrap your Route components inside the Routes element */}
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import SignupForm from "./components/SignupForm";
// import LoginForm from "./components/LoginForm";
// import MovieList from "./components/MovieList";
// import CompanyInfo from "./components/CompanyInfo";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Signup</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/movies">Movies</Link>
//             </li>
//             <li>
//               <Link to="/company-info">Company Info</Link>
//             </li>
//           </ul>
//         </nav>

//         <Route exact path="/" component={SignupForm} />
//         <Route path="/login" component={LoginForm} />
//         <Route path="/movies" component={MovieList} />
//         <Route path="/company-info" component={CompanyInfo} />
//       </div>
//     </Router>
//   );
// };

// export default App;
