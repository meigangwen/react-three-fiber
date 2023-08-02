import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props:any) {
    const ref = useRef()

    useFrame((_,delta) => {
        ref.current.rotation.x += 1 * delta
        ref.current.rotation.y += 0.5 * delta
    })

    return (
      <mesh 
        {...props} 
        ref={ref}
        onPointerDown={(e) => console.log("Pointer down " + e.object.name)}
        onPointerUp={(e) => console.log("Pointer up " + e.object.name)}
        onPointerOver={(e) => console.log('pointer over ' + e.object.name)}
        onPointerOut={(e) => console.log('pointer out ' + e.object.name)}
        onUpdate={(self) => console.log(self)}>
          <boxGeometry />
          <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
    )
}