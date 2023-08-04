'use client'

import { Stats, OrbitControls, ContactShadows } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Env from '@/components/Env'
import Model from './Model'

export default function App() {
  return (
    <Canvas camera={{ position: [-8, 5, 8] }}>
      <Env 
        height={10}
        radius={115}
        scale={100}
        img="venice_sunset_1k.hdr" 
      />
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      <Model />
      <ContactShadows
        scale ={150}
        position = {[0.33,-0.33,0.33]}
        opacity = {1.5} 
      />
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}