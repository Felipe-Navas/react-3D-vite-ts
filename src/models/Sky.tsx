/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb?url'

interface Props {
  isRotating: boolean
}

export const Sky = ({ isRotating }: Props) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef<any>({
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
