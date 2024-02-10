import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/3d/sky.glb?url'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

interface Props {
  isRotating: boolean
}

export const Sky = ({ isRotating }: Props) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef({
    rotation: {
      y: 0,
    },
  })

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta
    }
  })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}
