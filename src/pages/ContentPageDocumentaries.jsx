import React from "react";
import ContentGrid from "../components/ContentGridComponents/contentGrid/ContentGrid";
import { documentariesData } from "../content/contentGrid/documentariesContent";

export default function ContentPageDocumentaries() {
  return (
    <>
      <ContentGrid
        title="Nossos Documentários"
        description="Assista a documentários incríveis e aprenda sobre a vida marinha e a história dos oceanos."
        items={documentariesData}
      />
    </>
  );
}
