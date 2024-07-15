import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function WhiteShort({body, color}) {
  const { nodes, materials } = useGLTF('Hairs/short_hair.glb')
  
  // Create a new white material
  const whiteMaterial = new THREE.MeshStandardMaterial({ color });
  
  let scale;
  let position;
  
  if (body === 'rectangle(tall)') {
    scale = 67;
    position = [0, 115, -4];
    console.log(body);
  } else if (body === 'rectangle(small)') {
    position = [0, 105, -4];
    scale = 65;
  } else if (body === 'rectangle(v-small)') {
    position = [0, 99, -2];
    scale = 65;
  } else {
    scale = 65;
    position = [0, 109, -4];
  }

  return (
    
      <group scale={scale} position={position}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={whiteMaterial}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_8.geometry}
          material={whiteMaterial}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_9.geometry}
          material={whiteMaterial}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_10.geometry}
          material={whiteMaterial}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_11.geometry}
          material={whiteMaterial}
          skeleton={nodes.Object_11.skeleton}
        />
     
    </group>
  )
}

useGLTF.preload('Hairs/short_hair.glb')