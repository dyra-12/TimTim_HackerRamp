import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function ShortHair({ body, color }) {
  const { nodes, materials } = useGLTF('Hairs/bob_haircut_with_buns_with_bones.glb');
  const customMaterial = new THREE.MeshStandardMaterial({ color });
  let scale;
  let position;
  
  if (body === 'rectangle(tall)') {
    scale = 65;
    position = [0, 116, -3];
  } else if (body === 'rectangle(small)') {
    position = [0, 105, -2];
    scale = 65;
  } else if (body === 'rectangle(v-small)') {
    position = [0, 100, -2];
    scale = 65;
  } else {
    scale = 65;
    position = [0, 109, -4];
  }
  

  return (
    <group scale={scale} position={position}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_6.geometry}
        material={customMaterial}
        skeleton={nodes.Object_6.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={customMaterial}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={customMaterial}
        skeleton={nodes.Object_8.skeleton}
      />
    </group>
  );
}

useGLTF.preload('Hairs/bob_haircut_with_buns_with_bones.glb');
