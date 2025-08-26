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
      setScrolled(window.scrollY > 60)
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
      <MainBanner />
      <MainBanner />
    </>
  )
}