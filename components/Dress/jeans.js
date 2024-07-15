import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
// tall - scale={0.89} position={[0, 0, -5]} scale={[-1.05, 1.15, 0.9]}
// avg - scale={0.89} position={[0, -8, -7]} scale={[-1.05, 1.15, 0.9]}
// small - scale={0.89} position={[0, -12, -7]}  scale={[-1.05, 1.15, 0.9]}
// v-small scale={0.89} position={[0, -15, -6]}  scale={[-1.05, 1.05, 0.9]}


export function Jeans ({body}) {
  const { nodes, materials } = useGLTF('Clothes/female_short_jeans.glb')

  let scale,position,Size 
  if(body==='rectangle(tall)'){
  scale = 0.89
  position = [0, 0, -5]
  Size= [-1.05, 1.15, 0.9]
  console.log("1")
}
else if(body==='rectangle(avg)'){
  scale = 0.89
  position = [0, -8, -7]
  Size= [-1.05, 1.15, 0.9]
  console.log("2")
}
else if(body==='rectangle(small)'){
  scale = 0.89
  position = [0, -12, -7]
  Size= [-1.05, 1.15, 0.9]
  console.log("3")
}
else{
  scale = 0.89
  position = [0, -15, -6]
  Size= [-1.05, 1.05, 0.9]
  console.log("4")
}
  return (
    
      <group scale={scale} position={position}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.shortjeans01_binding_mayainitialShadingGroup}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={Size}
      />
      </group>
   
  )
}

useGLTF.preload('Clothes/female_short_jeans.glb')