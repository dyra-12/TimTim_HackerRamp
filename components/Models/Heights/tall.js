import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Tall({body,bcolor,eyeColor}) {


  const { nodes, materials } = useGLTF('Models/rectange(tall).glb')

  const skinMaterial = new THREE.MeshStandardMaterial({
    ...materials['MBLab_skin3.001'],
    color: bcolor
  })

  const eyeShade = new THREE.MeshStandardMaterial({
    color:eyeColor
  })

  const darkMaterial = new THREE.MeshStandardMaterial({
    color: '#000000'
  })

  const whiteMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff'
  })

  const nailColor = new THREE.MeshStandardMaterial({
    color:'#ffadad'
  })

  return (
    <group position={[0, -3, -6]} scale={75}>
      <primitive object={nodes.root} />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001.geometry}
        material={darkMaterial}
        skeleton={nodes.MBLab_human_female001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001_1.geometry}
        material={darkMaterial}
        skeleton={nodes.MBLab_human_female001_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001_2.geometry}
        material={whiteMaterial}
        skeleton={nodes.MBLab_human_female001_2.skeleton}
      />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001_3.geometry}
        material={materials['MBlab_human_eyes.001']}
        skeleton={nodes.MBLab_human_female001_3.skeleton}
      />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001_4.geometry}
        material={materials['MBlab_cornea.001']}
        skeleton={nodes.MBLab_human_female001_4.skeleton}
      />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001_5.geometry}
        material={eyeShade}
        skeleton={nodes.MBLab_human_female001_5.skeleton}
      />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001_6.geometry}
        material={skinMaterial}
        skeleton={nodes.MBLab_human_female001_6.skeleton}
      />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001_7.geometry}
        material={materials['MBLab_tongue.001']}
        skeleton={nodes.MBLab_human_female001_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001_8.geometry}
        material={materials['MBlab_human_teeth.001']}
        skeleton={nodes.MBLab_human_female001_8.skeleton}
      />
      <skinnedMesh
        geometry={nodes.MBLab_human_female001_9.geometry}
        material={nailColor}
        skeleton={nodes.MBLab_human_female001_9.skeleton}
      />
    </group>
  )
}

useGLTF.preload('Models/rectange(tall).glb')