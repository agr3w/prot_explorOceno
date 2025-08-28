// src/components/home/AboutSection.jsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { aboutData } from '../../../content/home_content/aboutContent';

export default function AboutSection() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1100,
        mx: 'auto',
        mt: 8,
        mb: 12,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 6,
        px: 2,
      }}
    >
      {/* Explicative text and highlights */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {aboutData.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {aboutData.body}
        </Typography>
        {/* Highlight icons */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {aboutData.highlights.map((highlight, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <span role="img" aria-label={highlight.label} style={{ fontSize: 40 }}>
                {highlight.icon}
              </span>
              <Typography variant="subtitle2">{highlight.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Placeholder image/illustration */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 220,
        }}
      >
        <Box
          sx={{
            width: 260,
            height: 180,
            background: '#36d1e0',
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: 32,
            fontWeight: 500,
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}
        >
          IMG suave
        </Box>
      </Box>
    </Box>
  );
}