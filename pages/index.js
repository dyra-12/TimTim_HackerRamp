import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { ModeShape } from "../components/Models/ModelShape";
import { Model } from "../components/Models/Hair/WhiteHair";
import { Women } from "../components/Models/Women";
import { Jeans } from "../components/Dress/jeans";
import { Avg } from "../components/Models/Heights/height";
import { WhiteShort } from "../components/Models/Hair/HairShort";
import { TallDress } from "../components/Dress/Tall/dress";
import ImageGallery from "./Selections/Selections";
import TryOn from "./Tryon";


const Index = () => {
  return (
    // <div className="container">
    //   <div className="canvas-wrapper">
    //     <Canvas
    //       camera={{ position: [0, 1, 5], fov: 50 }}
    //       style={{ display: "block", width: "50%", height: "100vh" }}
    //     >
    //       <color attach="background" args={["#eee"]} />
    //       <Environment preset="studio" intensity={1} />
    //       <PerspectiveCamera makeDefault position={[0, 100, 200]} />
    //       <OrbitControls maxDistance={180} target={[0, 60, 0]} />
    //       <Avg />
    //      <Model />
    //       {/* <Women /> */}
    //       <TallDress />
    //         {/* <WavyHair />
            
    //         <White_blouse />
    //          */}
        
    //     </Canvas>
    //   </div>
    <ImageGallery />
    // </div>
  );
};

export default Index;



