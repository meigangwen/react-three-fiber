import { Environment } from '@react-three/drei'
import { useControls } from 'leva'

// default values: height:10, radius: 115, scale: 100

export default function Env(props:any) {
    const { height, radius, scale } = useControls('Ground', {
      height: { value: props.height, min: 0, max: 100, step: 1 },
      radius: { value: props.radius, min: 0, max: 1000, step: 1 },
      scale: { value: props.scale, min: 0, max: 1000, step: 1 },
    })
    return (
      <Environment
        files={"./img/" + props.img}
        background
        ground={{
          height: height,
          radius: radius,
          scale: scale
        }} 
      />
    )
  }