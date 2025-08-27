import React, { useEffect, useState } from 'react'
import Globe3D from '../components/Globe3D'
import HighlightIcons from '../components/HighlightIcons'
import { Typography, Button, Box, Container, Paper, Fade } from '@mui/material'
import Navigator from '../components/navigator/Navigator'
import MainBanner from '../components/main_banner/MainBanner'
import NavigatorTransparent from '../components/navigator/NavigatorTransparent'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <NavigatorTransparent />
      <Fade in={scrolled} timeout={200}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 10 }}>
          <Navigator />
        </div>
      </Fade>
      <MainBanner />
      <div>
        <HighlightIcons />
        <Container sx={{ my: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 500, mb: 4 }}>
            Descubra o Mundo Subaquático
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              Mergulhe em uma experiência interativa e educativa sobre os oceanos do mundo. Explore mapas 3D detalhados, descubra a biodiversidade marinha e aprenda sobre a importância da conservação dos nossos ecossistemas aquáticos.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary" size="large" sx={{ textTransform: 'none', fontWeight: 500 }}>
                Comece sua jornada
              </Button>
            </Box>
          </Paper>
        </Container>
        <Box
          sx={{
            height: '600px',
            width: '100%',
            mb: 8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <Globe3D />
        </Box>
      </div>
    </>
  )
}