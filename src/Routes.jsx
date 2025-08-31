import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { quizzesData } from "./content/contentGrid/quizzesContent";
import { documentariesData } from "./content/contentGrid/documentariesContent";
import ContentPageTemplate from "./pages/ContentPageTemplate";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/documentaries"
          element={
            <ContentPageTemplate
              data={documentariesData}
              title="Nossos Documentários"
              description="Assista a documentários incríveis e aprenda sobre a vida marinha e a história dos oceanos."
            />
          }
        />
        <Route
          exact
          path="/quizzes"
          element={
            <ContentPageTemplate
              data={quizzesData}
              title="Nossos Quizzes"
              description="Teste seus conhecimentos sobre a vida marinha e a história dos oceanos."
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
