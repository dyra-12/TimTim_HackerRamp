import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

export function Ponytail(props) {
  const { nodes, materials } = useGLTF('Hairs/white_ponytail_with_bones.glb');


  const newColor = '#000000'; 

 
  const newMaterial1 = useMemo(
    () => new MeshStandardMaterial({ color: newColor }),
    [newColor]
  );

  const newMaterial2 = useMemo(
    () => new MeshStandardMaterial({ color: newColor }),
    [newColor]
  );

  return (
    <group {...props} dispose={null}>
      <group scale={55} position={[0, 112, -4]}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          geometry={nodes.Object_6.geometry}
          material={newMaterial1}
          skeleton={nodes.Object_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={newMaterial2}
          skeleton={nodes.Object_7.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('Hairs/white_ponytail_with_bones.glb');
