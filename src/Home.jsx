import React from 'react'
import Globe3D from './Globe3D'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0a2540 0%, #02101a 100%)',
      color: '#fff',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <header style={{ marginTop: 60, textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>ExplorOcean</h1>
        <p style={{ fontSize: '1.3rem', marginTop: 10 }}>
          Aprofunde seus conhecimentos
        </p>
        <button
          style={{
            marginTop: 30,
            padding: '12px 32px',
            fontSize: '1.1rem',
            borderRadius: 20,
            background: '#1e90ff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          Mergulhar
        </button>
      </header>

      {/* Ícones de destaque */}
      <section style={{
        display: 'flex',
        gap: 32,
        marginTop: 60,
        marginBottom: 40,
        justifyContent: 'center'
      }}>
        <div>
          <span role="img" aria-label="Globo" style={{ fontSize: 40 }}>🌐</span>
          <p style={{ marginTop: 8 }}>Navegação Interativa</p>
        </div>
        <div>
          <span role="img" aria-label="Peixe" style={{ fontSize: 40 }}>🐟</span>
          <p style={{ marginTop: 8 }}>Vida Marinha</p>
        </div>
        <div>
          <span role="img" aria-label="Troféu" style={{ fontSize: 40 }}>🏆</span>
          <p style={{ marginTop: 8 }}>Desafios</p>
        </div>
        <div>
          <span role="img" aria-label="Livro" style={{ fontSize: 40 }}>📚</span>
          <p style={{ marginTop: 8 }}>Conteúdo Profundo</p>
        </div>
      </section>

      {/* Sessão do globo 3D */}
      <section style={{
        width: '100%',
        maxWidth: 900,
        height: 500,
        margin: '0 auto',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(0,0,0,0.3)'
      }}>
        <Globe3D />
      </section>
    </div>
  )
}