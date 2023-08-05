import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { MathUtils } from 'three'

export default function Button(props:any) {
    const ref = useRef()
    const [hovered, setHovered] = useState()

    useFrame(() => {
        ref.current.rotation.x = hovered 
            ? MathUtils.lerp( ref.current.rotation.x, -Math.PI * 2, 0.025)
            : MathUtils.lerp( ref.current.rotation.x, 0 , 0.025)
    })

    return (
        <mesh 
            {...props}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>
            <icosahedronGeometry />
            <meshPhysicalMaterial
                roughness={0}
                metalness={0}
                thickness={3.12}
                ior={1.74}
                transmission={1.0}
            />
        </mesh>
    )
}