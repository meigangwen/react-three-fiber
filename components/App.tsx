'use client'

import { Stats, OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Env from '@/components/Env'

export default function App() {
  const gltf = useLoader(GLTFLoader, './models/scene.glb')

  return (
    <Canvas camera={{ position: [-8, 5, 8] }}>
      <Env />
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      <primitive object={gltf.scene} />
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}