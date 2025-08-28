import React, { useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'

export default function MainBanner() {
    const [diving, setDiving] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            // Quando o scroll passa de 100px, ativa o efeito de mergulho
            setDiving(window.scrollY > 100)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <Box
            sx={{
                position: 'relative',
                width: diving ? '100%' : 'calc(100vw - 48px)',
                height: diving ? '100vh' : '80vh',
                margin: diving ? 0 : '24px auto',
                borderRadius: diving ? 0 : 4,
                overflow: 'hidden',
                boxShadow: diving ? 'none' : '0 2px 16px rgba(0,0,0,0.15)',
                transition: 'all 0.6s cubic-bezier(.77,0,.18,1)',
                background: 'url("/src/assets/earthmap1k.jpg") center/cover, #1032ccff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1,
            }}
        >
            {/* Texto centralizado */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    background: diving ? 'rgba(57, 54, 224, 0.55)' : 'rgba(57, 54, 224, 0.75)',
                    transition: 'background 0.6s cubic-bezier(.77,0,.18,1)',
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 500, mb: 2 }}>
                    ExplorOcean
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                    Aprofunde seus conhecimentos
                </Typography>
            </Box>
            {/* Botão na parte inferior, fixo quando mergulhado */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 32,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 3,
                    transition: 'all 0.6s cubic-bezier(.77,0,.18,1)',
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        background: '#e0e0e0',
                        color: '#36d1e0',
                        borderRadius: 4,
                        px: 4,
                        py: 1,
                        fontWeight: 500,
                        fontSize: '1.1rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        '&:hover': {
                            background: '#b2ebf2',
                        },
                    }}
                >
                    Mergulhar
                </Button>
            </Box>
        </Box>
    )
}