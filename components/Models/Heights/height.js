import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { V_small } from './v-small';
import { Small } from './small';
import { Medium } from './avg';
import { Tall } from './tall';

export function Avg({ body,color,eyeColor }) {
  let path;
  console.log(eyeColor)
  switch (body) {
    case 'rectangle(v-small)':
      return <V_small body={body} bcolor={color} eyeColor={eyeColor} />;
    case 'rectangle(small)':
      return <Small body={body} bcolor={color} eyeColor={eyeColor}/>;
    case 'rectangle(avg)':
      return <Medium body={body} bcolor={color} eyeColor={eyeColor}/>;
    case 'rectangle(tall)':
      return <Tall body={body} bcolor={color} eyeColor={eyeColor}/>;
      break;
    default:
      return <Medium body={body} bcolor={color} eyeColor={eyeColor}/>;
  }

  // If path is defined, preload the GLTF model
  if (path) {
    useGLTF.preload(path);

    // Return your Three.js scene here
    return (
      <group position={[0, -3, -6]} scale={75}>
        {/* Your Three.js components */}
      </group>
    );
  }

  // Default return in case path is not defined
  return null;
}
