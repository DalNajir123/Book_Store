import React from "react";
import Home from "./component/home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./component/courses/Courses";

function App() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
