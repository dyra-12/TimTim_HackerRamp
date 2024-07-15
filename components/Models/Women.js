import React from "react";
import { useGLTF } from "@react-three/drei";


export function Women(props) {
  const { nodes, materials } = useGLTF("/woman_dress_2.glb");
  console.log("Nodes1:", nodes);
  console.log("Materials1:", materials);

  return (
    <group {...props} dispose={null} position={[0, -1, 0]} className="women">
      {/* <group scale={0.7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dress2_Stretch_Denim_FCL1PSD003_FRONT_4181_0.geometry}
          material={materials.Stretch_Denim_FCL1PSD003_FRONT_4181}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dress2_Cotton_Oxford_FCL1PSC011_FRONT_4174_0.geometry}
          material={materials.Cotton_Oxford_FCL1PSC011_FRONT_4174}
        />
      </group> */}

      <group scale={0.7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body_Material13454_0.geometry}
          material={materials.Material13454}
        >
          <meshStandardMaterial color="#8d5524" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body_Material13458_0.geometry}
          material={materials.Material13458}
        >
          <meshStandardMaterial color="#8d5524" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body_Material13462_0.geometry}
          material={materials.Material13462}
        >
          <meshStandardMaterial color="#8d5524" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.body_Material13466_0.geometry}
          material={materials.Material13466}
        >
          <meshStandardMaterial color="#8d5524" />
        </mesh>
      </group>

      <group scale={0.7}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoes_l_Shape_dummySG1SG1_0.geometry}
          material={materials.dummySG1SG1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoes_l_Shape_W_Shoes_skinSG1SG1SG1_0.geometry}
          material={materials.W_Shoes_skinSG1SG1SG1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoes_l_Shape_HEELSG1SG1_0.geometry}
          material={materials.HEELSG1SG1}
        />
      </group>
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.hair_Shape_Material13385_0.geometry}
        scale={[3, 3, 3]} // Adjusting scale uniformly
      >
        <meshStandardMaterial color="#000000" shininess={30} />
      </mesh>

      

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eye_L_Material13473_0.geometry}
        material={materials.Material13473}
        scale={0.7}
      />
      <meshStandardMaterial color="#8d5524" />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eye_R_Material13480_0.geometry}
        material={materials.Material13480}
        scale={0.7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyelash_L_Material13486_0.geometry}
        material={materials.Material13486}
        scale={0.7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyelash_R_Material13493_0.geometry}
        material={materials.Material13493}
        scale={0.7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tooth_Material13499_0.geometry}
        material={materials.Material13499}
        scale={0.7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoes_r_Shape__0.geometry}
        material={materials.shoes_r_Shape__0}
        scale={0.7}
      />
    </group>
  );
}

useGLTF.preload("/woman_dress_2.glb");
useGLTF.preload('/vcha_long_white_hair.glb');
