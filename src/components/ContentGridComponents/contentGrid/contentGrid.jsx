// src/components/ContentGrid/ContentGrid.jsx

import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s cubic-bezier(.77,0,.18,1), box-shadow 0.3s cubic-bezier(.77,0,.18,1)',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
}));

const CardMediaWrapper = styled(Box)(({ imageUrl }) => ({
  height: 200,
  width: '100%',
  background: `url(${imageUrl}) center/cover`,
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '8px',
  color: 'white',
}));

const ContentGrid = ({ title, description, items }) => {
  return (
    <Box sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h3" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        {description}
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center" alignItems="stretch" >
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{width: '450px'}}>
            <StyledCard>
              <CardMediaWrapper imageUrl={item.imageUrl}>
                {/* Rótulo de avaliação (rating) */}
                {item.rating && (
                  <Box sx={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0,0,0,0.5)', borderRadius: '4px', p: '4px 8px' }}>
                    <Typography variant="caption" sx={{ color: 'white' }}>
                      {item.rating}⭐
                    </Typography>
                  </Box>
                )}
                {/* Tags de nível de dificuldade */}
                {item.tags && (
                  <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: '4px' }}>
                    {item.tags.map((tag, tagIndex) => (
                      <Box key={tagIndex} sx={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px', p: '4px 8px' }}>
                        <Typography variant="caption" sx={{ color: 'white' }}>
                          {tag}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </CardMediaWrapper>
              <CardContent sx={{ flexGrow: 1, textAlign: 'left' }}>
                {/* Título do card e ícone de vídeo */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h5" component="div">
                    {item.label}
                  </Typography>
                  {item.icon && (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.icon}
                    </Typography>
                  )}
                </Box>
                {/* Rótulos de categoria */}
                {item.category && (
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                    {item.category}
                  </Typography>
                )}
                {/* Descrição curta */}
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                  {item.shortDescription}
                </Typography>
                {/* Duração do conteúdo */}
                {item.duration && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      {item.duration}
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentGrid;