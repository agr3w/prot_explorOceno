import React from "react";
import ContentGrid from "../components/ContentGridComponents/contentGrid/ContentGrid";
import { quizzesData } from "../content/contentGrid/quizzesContent";

export default function ContentPageQuizzes() {
  return (
    <>
      <ContentGrid
        title="Nossos Quizzes"
        description="Teste seus conhecimentos sobre a vida marinha e a história dos oceanos."
        items={quizzesData}
      />
    </>
  );
}
