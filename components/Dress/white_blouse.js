import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// tall: scale={0.1} position={[1, 11, 12] scale={[0.88, 1.3, 0.6]}
// avg:  scale={0.1} position={[1, 2, 12]} scale={[0.88, 1.3, 0.6]}
// small: scale={0.1} position={[1, -3, 12]} scale={[0.88, 1.3, 0.6]}
//v-small: scale={0.1} position={[1, -7, 12]} scale={[0.88, 1.3, 0.6]}
export function White_blouse({ body }) {
  const { nodes, materials } = useGLTF("Clothes/blusa_flores_simple.glb");
  let scale, position, Size;
  if (body === "rectangle(tall)") {
    scale = 0.1;
    position = [1, 11, 12]
    Size = [0.88, 1.3, 0.6]
    console.log("1");
  } else if (body === "rectangle(avg)") {
    scale = 0.1;
    position = [1, 2, 12]
    Size = [0.88, 1.3, 0.6]
    console.log("2");
  } else if (body === "rectangle(small)") {
    scale = 0.1;
    position = [1, -3, 12]
    Size =[0.88, 1.3, 0.6]
    console.log("3");
  } else {
    scale = 0.1;
    position = [1, -7, 12]
    Size = [0.88, 1.3, 0.6]
    console.log("4");
  }

  return (
    <group rotation={[-Math.PI / 2, 0, 0]} scale={scale} position={position}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.defaultMat}
        position={[-5.027, 129.138, 51.926]}
        scale={Size}
      />
    </group>
  );
}

useGLTF.preload("Clothes/blusa_flores_simple.glb");
