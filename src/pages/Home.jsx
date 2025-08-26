import React from 'react'
import Globe3D from '../components/Globe3D'
import HighlightIcons from '../components/HighlightIcons'
import { Typography, Button, Box, Container, Paper } from '@mui/material'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #0a2540 0%, #02101a 100%)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          gap: 8,
        }}
      >
        <header>
          <Typography variant="h1" sx={{ textAlign: 'center', mt: 4 }}>
            ExplorOcean
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, textAlign: 'center' }}>
            Aprofunde seus conhecimentos
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button variant="contained" size="large">
              Mergulhar
            </Button>
          </Box>
        </header>

        <HighlightIcons />
        {/* <Globe3D /> */}
        {/* <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={12} sx={{ width: '100%', height: 500, borderRadius: '20px', overflow: 'hidden' }}>
        </Paper>
      </Container> */}
      </Box>
    </>
  )
}