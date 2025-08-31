import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContentPageDocumentaries from "./pages/ContentPageDocumentaries";
import ContentPageQuizzes from "./pages/ContentPageQuizzes";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentaries" element={<ContentPageDocumentaries />} />
        <Route path="/quizzes" element={<ContentPageQuizzes />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
