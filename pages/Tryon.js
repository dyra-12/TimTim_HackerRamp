import React, { useState } from "react";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avg } from "../components/Models/Heights/height";
import { WhiteShort } from "../components/Models/Hair/HairShort";
import { Ponytail } from "../components/Models/Hair/Ponytail";
import { ShortHair } from "../components/Models/Hair/ShortHair";
import { Model } from "../components/Models/Hair/WhiteHair";
import { WavyHair } from "../components/Models/Hair/WhiteLongWavy";
import { PartyDress } from "../components/Dress/button_blouse";
import { WhiteDress } from "../components/Dress/dress";
import { Jeans } from "../components/Dress/jeans";
import { White_blouse } from "../components/Dress/white_blouse";
import { ModeShape } from "../components/Models/ModelShape";

const TryOn = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [selectedHair, setSelectedHair] = useState(null);
  const [selectedShoes, setSelectedShoes] = useState(null);
  const [selectedBody, setSelectedBody] = useState("rectangle(tall)");
  const [selectedDresses, setSelectedDresses] = useState([]);
  const [selectedSkinColor, setSelectedSkinColor] = useState("#ffe5c8");
  const [selectedEyeColor, setSelectedEyeColor] = useState("#000000");
  const [selectedHairColor, setSelectedHairColor] = useState("#ffffff");
  const [outfitScores, setOutfitScores] = useState({
    PartyDress: Math.floor(Math.random() * 100),
    WhiteDress: Math.floor(Math.random() * 100),
    Jeans: Math.floor(Math.random() * 100),
    White_blouse: Math.floor(Math.random() * 100),
  });
  const [totalScore, setTotalScore] = useState(0);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  const handleHairItemClick = (hairId) => {
    setSelectedHair(hairId === selectedHair ? null : hairId);
  };

  const handleShoesItemClick = (shoesId) => {
    setSelectedShoes(shoesId === selectedShoes ? null : shoesId);
  };

  const handleDressItemClick = (dressId) => {
    setSelectedDresses((prevSelected) => {
      const newSelected = prevSelected.includes(dressId)
        ? prevSelected.filter((item) => item !== dressId)
        : [...prevSelected, dressId];
      
      // Update total score
      const newTotalScore = newSelected.reduce((sum, item) => sum + outfitScores[item], 0);
      setTotalScore(newTotalScore);
      
      return newSelected;
    });
  };

  const clearSelectedDresses = () => {
    setSelectedDresses([]);
    setTotalScore(0);
  };

  const handleSkinColorClick = (colorId) => {
    setSelectedSkinColor(`#${colorId}`);
  };

  const handleEyeColorClick = (colorId) => {
    setSelectedEyeColor(`#${colorId}`);
  };

  const handleHairColorClick = (colorId) => {
    setSelectedHairColor(`#${colorId}`);
  };

  const componentProps = {
    WhiteShort: { body: selectedBody, color: selectedHairColor },
    ShortHair: { body: selectedBody, color: selectedHairColor },
    Model: { body: selectedBody, color: selectedHairColor },
    WavyHair: { body: selectedBody, color: selectedHairColor },
    PartyDress: { body: selectedBody },
    WhiteDress: { body: selectedBody },
    Jeans: { body: selectedBody },
    White_blouse: { body: selectedBody },
  };

  const ScoreBox = ({ totalScore }) => {
    return (
      <div style={{
        borderRight:'1px solid #DFDFDF',
        borderTop:'1px solid #DFDFDF',
        position: 'absolute',
        bottom: '13px',
        left: '37px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 1000,
        
      }}>
        <h4>Total Carbon Footprint Score: {totalScore}</h4>
      </div>
    );
  };

  return (
    <div className="split-container">
      <div className="left-container">
        <div className="container">
          <div className="canvas-wrapper">
            <Canvas
              camera={{ position: [0, 1, 5], fov: 50 }}
              style={{ display: "block", width: "100%", height: "100%" }}
            >
              <color attach="background" args={["#eee"]} />
              <Environment preset="studio" intensity={1} />
              <PerspectiveCamera makeDefault position={[0, 100, 200]} />
              <OrbitControls maxDistance={180} target={[0, 60, 0]} />
              <ComponentSelector
                id="BodySelector"
                props={{ body: selectedBody, color: selectedSkinColor, eyeColor: selectedEyeColor }}
              />
              {selectedHair && (
                <ComponentSelector
                  id={selectedHair}
                  props={componentProps[selectedHair]}
                />
              )}
              {selectedShoes && (
                <ComponentSelector
                  id={selectedShoes}
                  props={componentProps[selectedShoes]}
                />
              )}
              {selectedDresses.map((dressId) => (
                <ComponentSelector
                  key={dressId}
                  id={dressId}
                  props={componentProps[dressId]}
                />
              ))}
            </Canvas>
            <ScoreBox totalScore={totalScore} />
          </div>
        </div>
      </div>

      <div className="right-container">
        <div className="icons-container">
          <div
            className={`icon ${activeTab === "hair" ? "active" : ""}`}
            onClick={() => handleTabClick("hair")}
          >
            <img src="/Materials/hair-2-svgrepo-com.svg" alt="" />
          </div>
          <div
            className={`icon ${activeTab === "dress" ? "active" : ""}`}
            onClick={() => handleTabClick("dress")}
          >
            <img src="/Materials/dress-3-svgrepo-com.svg" alt="" />
          </div>
          
          <div
            className={`icon ${activeTab === "body" ? "active" : ""}`}
            onClick={() => handleTabClick("body")}
          >
            <img src="/Materials/female-mark-svgrepo-com.svg" alt="" />
          </div>
        </div>
        {activeTab === "hair" && (
          <div className="customization-panel">
            <h3>HairStyles</h3>
            <div className="grid-container">
              <div
                className="grid-item"
                id="WhiteShort"
                onClick={() => handleHairItemClick("WhiteShort")}
              > <img src="/Hairs/Photos/1.png" alt="" />

              </div>
              <div
                className="grid-item"
                id="Model"
                onClick={() => handleHairItemClick("Model")}
              >
                <img src="/Hairs/Photos/2.png" alt="" />
              </div>
              <div
                className="grid-item"
                id="WavyHair"
                onClick={() => handleHairItemClick("WavyHair")}
              >
                <img src="/Hairs/Photos/4.png" alt="" />
              </div>
              <div
                className="grid-item"
                id="ShortHair"
                onClick={() => handleHairItemClick("ShortHair")}
              >
                <img src="/Hairs/Photos/3.png" alt="" />
              </div>
               <div
                className="grid-item"
                id="ShortHair"
              >
                <img src="/Hairs/Photos/5.png" alt="" />
              </div>
            </div>
            <h3>HairColor</h3>
            <div className="grid-container2">
              {[
                "000000", "2c222b", "4a3728", "724832", "8e583e", "ab684a", "d29260", 
                "f0c079", "fbdbac", "f1ca7e", "e0bd6f", "cfb160", "bea551", "ad9842", 
                "9c8b33", "6d4c41", "543a3a", "8d5524", "c68642", "e0ac69", "e6bea5",
                "57331d", "855539", "6b4226", "4d3319", "3b2a1a"
              ].map((colorId) => (
                <div
                  key={colorId}
                  className="grid-item1"
                  id={colorId}
                  onClick={() => handleHairColorClick(colorId)}
                >
                  <div
                    className="color"
                    style={{ backgroundColor: `#${colorId}` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "dress" && (
          <div className="customization-panel">
            <div className="grid-container">
              <div
                className="grid-item"
                id="PartyDress"
                onClick={() => handleDressItemClick("PartyDress")}
              >
                <img src="Outfits/1.png" alt="" />
              </div>
              <div
                className="grid-item"
                id="WhiteDress"
                onClick={() => handleDressItemClick("WhiteDress")}
              >
                <img src="Outfits/2.png" alt="" />
              </div>
              <div
                className="grid-item"
                id="Jeans"
                onClick={() => handleDressItemClick("Jeans")}
              >
                <img src="Outfits/3.png" alt="" />
              </div>
              <div
                className="grid-item"
                id="White_blouse"
                onClick={() => handleDressItemClick("White_blouse")}
              >
                <img src="Outfits/4.png" alt="" />
              </div>
              
            </div>
            {selectedDresses.length > 0 && (
              <button className="clear-button" onClick={clearSelectedDresses}>
                Clear Selection
              </button>
            )}
          </div>
        )}
        
        {activeTab === "body" && (
          <div className="customization-panel">
            <h3>Change Body Shape</h3>
            <div className="grid-container1">
              <div
                className="grid-item"
                id="hour"
                onClick={() => setSelectedBody("hour")}
              >
                Hour
              </div>
              <div
                className="grid-item"
                id="in_triangle"
                onClick={() => setSelectedBody("in_triangle")}
              >
                Inv. Triangle
              </div>
              <div
                className="grid-item"
                id="rectangle(avg)"
                onClick={() => setSelectedBody("rectangle(avg)")}
              >
                Rectangle
              </div>
              <div
                className="grid-item"
                id="pear"
                onClick={() => setSelectedBody("pear")}
              >
                Pear
              </div>
              <div
                className="grid-item"
                id="round"
                onClick={() => setSelectedBody("round")}
              >
                Round
              </div>
            </div>
            <h3>Change Height</h3>
            <div className="grid-container1">
              <div
                className="grid-item"
                id="rectangle(v-small)"
                onClick={() => setSelectedBody("rectangle(v-small)")}
              >
                V-small
              </div>
              <div
                className="grid-item"
                id="rectangle(small)"
                onClick={() => setSelectedBody("rectangle(small)")}
              >
                Small
              </div>
              <div
                className="grid-item"
                id="rectangle(avg)"
                onClick={() => setSelectedBody("rectangle(avg)")}
              >
                Medium
              </div>
              <div
                className="grid-item"
                id="rectangle(tall)"
                onClick={() => setSelectedBody("rectangle(tall)")}
              >
                Tall
              </div>
            </div>
            <h3>Change Skin Color</h3>
            
            <div className="grid-container2">
              {["ffe5c8", "ffdabe", "ffceb4", "ffc3aa", "f0b8a0", "e1ac96", "d2a18c", "c39582", "b48a78", "a57e6e", "967264", "87675a", "785c50", "695046", "5a453c"].map((colorId) => (
                <div
                  key={colorId}
                  className="grid-item1"
                  id={colorId}
                  onClick={() => handleSkinColorClick(colorId)}
                >
                  <div
                    className="color"
                    style={{ backgroundColor: `#${colorId}` }}
                  ></div>
                </div>
              ))}
            </div>
            
            <h3>Change Eye Color</h3>
            <div className="grid-container2">
              {[
                "000000", "0A0A0A", "141414", "1E1E1E", "282828", "323232", "3C3C3C", "464646", "505050", "5A5A5A",
                "A0522D", "A52A2A", "B5651D", "C68642", "D2691E", "DEB887", "F4A460", "FFE4C4", "8B4513",
                "0000FF", "0000CD", "00008B", "000080", "191970", "4169E1", "4682B4", "5F9EA0", "87CEEB", "ADD8E6",
                "006400", "008000", "228B22", "2E8B57", "3CB371", "32CD32", "00FF00", "7FFF00", "7CFC00", "ADFF2F"
              ].map((colorId) => (
                <div
                  key={colorId}
                  className="grid-item1"
                  id={colorId}
                  onClick={() => handleEyeColorClick(colorId)}
                >
                  <div
                    className="color"
                    style={{ backgroundColor: `#${colorId}` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}
          <div className="bottom">
          <button>Add to Cart <img src="Materials/cart-large-minimalistic-svgrepo-com.svg" alt="" /></button>
          <button>Share <img src="Materials/share-svgrepo-com (1).svg" alt="" /> </button>
        </div>
      </div>

    
    </div>
  );
};

const BodySelector = ({ body, color, eyeColor }) => {
  const rectangleTypes = [
    "rectangle(tall)",
    "rectangle(avg)",
    "rectangle(small)",
    "rectangle(v-small)",
  ];
  if (rectangleTypes.includes(body)) {
    return <Avg body={body} color={color} eyeColor={eyeColor} />;
  } else {
    return <ModeShape body={body} color={color} eyeColor={eyeColor} />;
  }
};

const ComponentSelector = ({ id, props }) => {
  const components = {
    WhiteShort,
    ShortHair,
    Model,
    WavyHair,
    PartyDress,
    WhiteDress,
    Jeans,
    White_blouse,
    BodySelector,
  };

  const SelectedComponent = components[id] || components.BodySelector;

  return <SelectedComponent {...props} color={props.color} />;
};

export default TryOn;