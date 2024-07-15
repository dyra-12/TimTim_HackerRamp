import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Medium } from './Heights/avg';
import { Hour } from './Shapes/hour';
import { Inv_triangle } from './Shapes/in_triangle';
import { Pear } from './Shapes/pear';
import { Round } from './Shapes/round';

export function ModeShape({ body,color,eyeColor }) {
  let path;

  switch (body) {
    case 'hour':
      return <Hour body={body} bcolor={color} eyeColor={eyeColor}/>;
    case 'in_triangle':
      return <Inv_triangle body={body} bcolor={color} eyeColor={eyeColor}/>;
    case 'pear':
      return <Pear body={body} bcolor={color} eyeColor={eyeColor}/>;
    case 'round':
      return <Round body={body} bcolor={color} eyeColor={eyeColor}/>;
      break;
    default:
      return <Medium body={body} bcolor={color} eyeColor={eyeColor} />;
  }

  // If path is defined, preload the GLTF model
  if (path) {
    useGLTF.preload(path);

    // Return your Three.js scene here
    return (
      <group position={[0, 7, -6]} scale={75}>
        {/* Your Three.js components */}
      </group>
    );
  }

  // Default return in case path is not defined
  return null;
}
