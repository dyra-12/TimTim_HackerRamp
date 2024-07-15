import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

let path = 'hairs/vcha_long_white_hair.glb';

export function Model({ body, color }) {
  const { nodes, materials } = useGLTF(path);
  const customMaterial = new THREE.MeshStandardMaterial({ color });
  let scale;
let position;

if (body === 'rectangle(tall)') {
  scale = 65;
  position = [0, 115, -2];
} else if (body === 'rectangle(small)') {
  position = [0, 105, -2];
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
        geometry={nodes.Object_6.geometry}
        material={customMaterial}
        skeleton={nodes.Object_6.skeleton}
      />
    </group>
  );
}

useGLTF.preload(path);
