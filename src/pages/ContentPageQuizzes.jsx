// src/pages/ContentPageQuizzes.jsx

import React, { useState } from "react";
import ContentGrid from "../components/ContentGridComponents/contentGrid/ContentGrid";
import { quizzesData } from "../content/contentGrid/quizzesContent";
import Navigator from "../components/navigator/Navigator";
import Footer from "../components/footer/footer";
import { Box, Grid } from "@mui/material";
import CategoryFilter from "../components/categoryFilter/categoryFilter";

// Extrair categorias únicas a partir dos dados dos quizzes
const uniqueCategories = [...new Set(quizzesData.map((item) => item.category))];

export default function ContentPageQuizzes() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredItems = selectedCategory
    ? quizzesData.filter((item) => item.category === selectedCategory)
    : quizzesData;

  return (
    <>
      <Navigator />
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Coluna do Filtro com estilo 'sticky' */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                position: "sticky",
                width: 200,
                minWidth: 200, // Largura mínima para evitar que ele fique muito pequeno
                display: { xs: "none", md: "block" }, // Oculta o filtro em telas pequenas
                marginRight: 4, // Adiciona espaço à direita do filtro
                alignContent: "center",
              }}
            >
              <CategoryFilter
                categories={uniqueCategories}
                onSelectCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </Box>
          </Grid>
          {/* Coluna do Conteúdo (cards) */}
          <Grid item xs={12} md={9}>
            <ContentGrid
              title="Nossos Quizzes"
              description="Teste seus conhecimentos sobre a vida marinha e a história dos oceanos."
              items={filteredItems}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer depth={0} />
    </>
  );
}
