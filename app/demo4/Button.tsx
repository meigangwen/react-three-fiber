import { useFrame } from '@react-three/fiber'
import { useRef, useState, useMemo } from 'react'
import { MathUtils,Color } from 'three'

const black = new Color('black')
export default function Button(props:any) {
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const [selected, setSelected] = useState(false)

    const currentMesh = ref.current;

    const colorTo = useMemo(
        () => new Color(Math.floor(Math.random() * 16777216)),
        []
    )
  
    useFrame(() => {
        if (currentMesh != undefined) {
            currentMesh.rotation.x = hovered 
                ? MathUtils.lerp( currentMesh.rotation.x, -Math.PI * 2, 0.025) 
                : MathUtils.lerp( currentMesh.rotation.x, 0 , 0.025)

            currentMesh.position.z = selected
                ? MathUtils.lerp(currentMesh.position.z, 0, 0.025)
                : MathUtils.lerp(currentMesh.position.z, -3, 0.025)
            
            currentMesh.material.color.lerp(selected ? colorTo : black, 0.025)
        }
    })

    return (
        <mesh 
            {...props}
            ref = {ref}
            onPointerDown={() => setSelected(!selected)}
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