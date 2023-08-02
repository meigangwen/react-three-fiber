'use client'

import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

function Box() {
  return (
    <mesh>
        <boxGeometry />
        <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}

export default function Home() {
  return (
    <StrictMode>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Box />
      </Canvas>
    </StrictMode>
  )
}
