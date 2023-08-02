import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props:any) {
    const ref = useRef()

    useFrame((_,delta) => {
        ref.current.rotation.x += 1 * delta
        ref.current.rotation.y += 0.5 * delta
    })

    return (
      <mesh {...props} ref={ref}>
          <boxGeometry />
          <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
    )
}