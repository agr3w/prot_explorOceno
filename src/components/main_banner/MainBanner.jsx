import React from 'react'
import { Box, Typography, Button } from '@mui/material'

export default function MainBanner() {
    return (
        <Box
            sx={{
                position: 'relative',
                // width: '100%',
                height: '100vh',
                margin: '12px 12px',
                borderRadius: 2.5,
                overflow: 'hidden',
                boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
                background: 'url("/src/assets/earthmap1k.jpg") center/cover, #1032ccff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
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
                    background: 'rgba(57, 54, 224, 0.75)',
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 500, mb: 2 }}>
                    ExplorOcean
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                    Aprofunde seus conhecimentos
                </Typography>
            </Box>
            {/* Botão na parte inferior, acima da imagem */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 32,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 3,
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