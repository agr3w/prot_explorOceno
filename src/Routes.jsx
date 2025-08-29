import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { documentariesData } from './content/contentGrid/documentariesContent';
import { quizzesData } from './content/contentGrid/quizzesContent';
import ContentGrid from './components/ContentGridComponents/contentGrid/ContentGrid';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/documentaries"
          element={
            <ContentGrid
              title="Nossos Documentários"
              description="Assista a documentários incríveis e aprenda sobre a vida marinha e a história dos oceanos."
              items={documentariesData}
            />
          }
        />
        <Route
          path="/quizzes"
          element={
            <ContentGrid
              title="Quizzes Interativos"
              description="Teste seus conhecimentos com nossos quizzes sobre biologia, oceanografia e muito mais!"
              items={quizzesData}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;