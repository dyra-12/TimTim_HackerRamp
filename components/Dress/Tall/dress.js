import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TallDress(props) {
  const { nodes, materials } = useGLTF('Clothes/Tall/untitled.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.8}  position={[0,-10.7 , -7]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.FABRIC_10_FRONT_26533}
          position={[-0.276, -3.128, -8.451]}
          scale={[1.2, 1.2, 1]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('Clothes/Tall/untitled.glb')
