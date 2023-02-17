import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../routes/Login";
import ToDoList from "../routes/ToDoList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
