import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Globe() {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#1e90ff" />
    </mesh>
  )
}

function MarianaTrenchPin({ onClick }) {
  // Coordenadas aproximadas para a Fossa das Marianas
  const phi = (11 * Math.PI) / 180 // latitude
  const theta = (142 * Math.PI) / 180 // longitude
  const radius = 2.05

  const x = radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return (
    <mesh position={[x, y, z]} onClick={onClick}>
      <sphereGeometry args={[0.07, 16, 16]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

export default function Globe3D() {
  const [showCard, setShowCard] = useState(false)

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Globe />
        <MarianaTrenchPin onClick={() => setShowCard(true)} />
        <OrbitControls />
      </Canvas>
      {showCard && (
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            background: 'white',
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            padding: 20,
            maxWidth: 300,
            zIndex: 10,
          }}
        >
          <h3>Fossa das Marianas</h3>
          <p>
            A Fossa das Marianas é o ponto mais profundo dos oceanos, localizada no Oceano Pacífico. Sua profundidade máxima chega a cerca de 11.000 metros.
          </p>
          <button onClick={() => setShowCard(false)}>Fechar</button>
        </div>
      )}
    </div>
  )
}