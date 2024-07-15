import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PartyDress({body}) {
  // v- small scale={0.8} position={[0, -20, -4]}  scale={[-1.05, 1.15, 0.9]}
  // small  scale={0.8} position={[0, -15, -4]}  scale={[-1.05, 1.15, 0.9]}
  // avg  scale={0.8} position={[0, -12, -4]} scale={[-1.05, 1.15, 0.9]}
  // tall  scale={0.8} position={[0, -5, -4]}  scale={[-1.05, 1.15, 0.9]}
  const { nodes, materials } = useGLTF('Clothes/party_dress.glb')

  let scale,position,Size 
  if(body==='rectangle(tall)'){
  scale = 0.8
  position =[0, -5, -4]
  Size= [-1.05, 1.15, 0.9]
}
else if(body==='rectangle(avg)'){
  scale =  0.8
  position = [0, -12, -4]
  Size= [-1.05, 1.15, 0.9]
}
else if(body==='rectangle(small)'){
  scale =  0.8
  position = [0, -15, -4]
  Size= [-1.05, 1.15, 0.9]
}
else{
  scale =  0.8
  position = [0, -20, -4]
  Size= [-1.05, 1.15, 0.9]
  
}
  return (
    
       <group  scale={scale} position={position}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.FABRIC_10_FRONT_26533}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={Size}
      />
      </group>
   
  )
}

useGLTF.preload('/party_dress.glb')
