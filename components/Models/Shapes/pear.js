import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Pear({ body,bcolor,eyeColor}) {
  const { nodes, materials } = useGLTF('Models/pear.glb')

  // Create new materials with modified colors
  const skinMaterial = new THREE.MeshStandardMaterial({
    ...materials.MBLab_skin3,
    color: bcolor
  })

  const eyeShade = new THREE.MeshStandardMaterial({
    color:eyeColor
  })

  const pupilMaterial = new THREE.MeshStandardMaterial({
    ...materials.MBlab_pupil,
    color: '#ffffff'
  })


  const corneaMaterial = new THREE.MeshStandardMaterial({
    ...materials.MBLab_Iris_V4,
    color: '#000000'
  })

  const eyelashMaterial = new THREE.MeshStandardMaterial({
    ...materials.MBlab_eyelash,
    color: '#000000'
  })

  const clothhMaterial = new THREE.MeshStandardMaterial({
    ...materials.MBlab_generic,
    color: '#000000'
  })
  return (
    
      <group position={[0, 7, -6]} scale={75}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.MBLab_human_female.geometry}
          material={eyelashMaterial}
          skeleton={nodes.MBLab_human_female.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MBLab_human_female_1.geometry}
          material={clothhMaterial}
          skeleton={nodes.MBLab_human_female_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MBLab_human_female_2.geometry}
          material={pupilMaterial}
          skeleton={nodes.MBLab_human_female_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MBLab_human_female_3.geometry}
          material={materials.MBlab_human_eyes}
          skeleton={nodes.MBLab_human_female_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MBLab_human_female_4.geometry}
          material={materials.MBlab_cornea}
          skeleton={nodes.MBLab_human_female_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MBLab_human_female_5.geometry}
          material={eyeShade}
          skeleton={nodes.MBLab_human_female_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MBLab_human_female_6.geometry}
          material={skinMaterial}
          skeleton={nodes.MBLab_human_female_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MBLab_human_female_7.geometry}
          material={materials.MBLab_tongue}
          skeleton={nodes.MBLab_human_female_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MBLab_human_female_8.geometry}
          material={materials.MBlab_human_teeth}
          skeleton={nodes.MBLab_human_female_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.MBLab_human_female_9.geometry}
          material={materials.MBLab_nails}
          skeleton={nodes.MBLab_human_female_9.skeleton}
        />
      </group>
    
  )
}

useGLTF.preload('Models/pear).glb')