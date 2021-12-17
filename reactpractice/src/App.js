import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./MyComponents/pages/Home";
import Login from "./MyComponents/pages/Login";
import Register from "./MyComponents/pages/Register";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// import React from "react";
// import Form from "./Form";
// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// };

// export default App;
