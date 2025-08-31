// src/pages/ContentPageDocumentaries.jsx

import React, { useState } from "react";
import ContentGrid from "../components/ContentGridComponents/contentGrid/ContentGrid";
import { documentariesData } from "../content/contentGrid/documentariesContent";
import Navigator from "../components/navigator/Navigator";
import Footer from "../components/footer/footer";
import { Box, Grid } from "@mui/material";
import CategoryFilter from "../components/categoryFilter/categoryFilter";

const uniqueCategories = [
  ...new Set(documentariesData.map((item) => item.category)),
];

export default function ContentPageDocumentaries() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredItems = selectedCategory
    ? documentariesData.filter((item) => item.category === selectedCategory)
    : documentariesData;

  return (
    <>
      <Navigator />
      <Box sx={{ p: 4, display: 'flex' }}> {/* Use display: 'flex' para o contêiner principal */}
        {/* Coluna do Filtro - agora com largura fixa */}
        <Box
          sx={{
            position: "sticky",
            width: 200,
            minWidth: 200, // Largura mínima para evitar que ele fique muito pequeno
            display: { xs: 'none', md: 'block' }, // Oculta o filtro em telas pequenas
            marginRight: 4, // Adiciona espaço à direita do filtro
            alignContent: 'center',
          }}
        >
          <CategoryFilter
            categories={uniqueCategories}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </Box>
        
        {/* Coluna do Conteúdo (cards) */}
        <Box sx={{ flexGrow: 1 }}> {/* Ocupa o espaço restante */}
          <ContentGrid
            title="Nossos Documentários"
            description="Assista a documentários incríveis e aprenda sobre a vida marinha e a história dos oceanos."
            items={filteredItems}
          />
        </Box>
      </Box>
      <Footer depth={0} />
    </>
  );
}