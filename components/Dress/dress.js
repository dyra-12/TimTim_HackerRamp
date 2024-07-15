import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function WhiteDress({body}) {
  // tall - scale={70} position={[0, 35, -21]} scale={[-0.17, 0.063, 0.214]}
  // avg - scale={70} position={[0, 28, -21]} scale={[-0.17, 0.063, 0.214]}
  // small -  scale={65} position={[0, 28, -20]} scale={[-0.183, 0.07, 0.214]}
  // v-small -  scale={65} position={[0, 23, -20]} scale={[-0.18, 0.07, 0.214]}

let scale,position,Size 
  if(body==='rectangle(tall)'){
  scale = 70
  position = [0, 35, -21]
  Size= [-0.17, 0.063, 0.214]
  console.log("1")
}
else if(body==='rectangle(avg)'){
  scale = 70
  position = [0, 28, -21]
  Size= [-0.17, 0.063, 0.214]
  console.log("2")
}
else if(body==='rectangle(small)'){
  scale = 65
  position = [0, 28, -20]
  Size= [-0.183, 0.07, 0.214]
  console.log("3")
}
else{
  scale = 65
  position = [0, 23, -20]
  Size= [-0.18, 0.07, 0.214]
  console.log("4")
}

  const { nodes, materials } = useGLTF('Clothes/dress-plain2.glb')
  return (
    // <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={scale} position={position}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_0.geometry}
          material={materials.Root}
          position={[0, -0.275, 0.868]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={Size}
        />
      </group>
    // </group>
  )
}

useGLTF.preload('Clothes/dress-plain2.glb')

