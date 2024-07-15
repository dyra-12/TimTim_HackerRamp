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
  const [selectedSkinColor, setSelectedSkinColor] = useState("#ffe5c8"); // Default color
  const [selectedEyeColor, setSelectedEyeColor] = useState("#000000"); // Default to black

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
    setSelectedDresses((prevSelected) =>
      prevSelected.includes(dressId)
        ? prevSelected.filter((item) => item !== dressId)
        : [...prevSelected, dressId]
    );
  };

  const clearSelectedDresses = () => {
    setSelectedDresses([]);
  };

  const handleSkinColorClick = (colorId) => {
    setSelectedSkinColor(`#${colorId}`);
  };

  const handleEyeColorClick = (colorId) => {
    setSelectedEyeColor(`#${colorId}`);
  };

  const componentProps = {
    WhiteShort: { body: selectedBody, color: 0xffffff },
    ShortHair: { body: selectedBody, color: 0xffffff },
    Model: { body: selectedBody, color: 0x000000 },
    WavyHair: { body: selectedBody, color: 0x000000 },
    PartyDress: { body: selectedBody },
    WhiteDress: { body: selectedBody },
    Jeans: { body: selectedBody },
    White_blouse: { body: selectedBody },
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
              ></div>
              <div
                className="grid-item"
                id="Model"
                onClick={() => handleHairItemClick("Model")}
              ></div>
              <div
                className="grid-item"
                id="WavyHair"
                onClick={() => handleHairItemClick("WavyHair")}
              ></div>
              <div
                className="grid-item"
                id="ShortHair"
                onClick={() => handleHairItemClick("ShortHair")}
              ></div>
               <div
                className="grid-item"
                id="ShortHair"
              ></div>
               <div
                className="grid-item"
                id="ShortHair"
              ></div>
               <div
                className="grid-item"
                id="ShortHair"
              ></div>
               <div
                className="grid-item"
                id="ShortHair"
              ></div>
               <div
                className="grid-item"
                id="ShortHair"
              ></div>
               <div
                className="grid-item"
                id="ShortHair"
              ></div>
               
            </div>
            <h3>HairColor</h3>
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
            
          </div>
        )}
        {activeTab === "dress" && (
          <div className="customization-panel">
            <div className="grid-container">
              <div
                className="grid-item"
                id="PartyDress"
                onClick={() => handleDressItemClick("PartyDress")}
              ></div>
              <div
                className="grid-item"
                id="WhiteDress"
                onClick={() => handleDressItemClick("WhiteDress")}
              ></div>
              <div
                className="grid-item"
                id="Jeans"
                onClick={() => handleDressItemClick("Jeans")}
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                onClick={() => handleDressItemClick("White_blouse")}
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                
              ></div>
              <div
                className="grid-item"
                id="White_blouse"
                
              ></div>
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
    // Black shades
    "000000", "0A0A0A", "141414", "1E1E1E", "282828", "323232", "3C3C3C", "464646", "505050", "5A5A5A",

    // Brown shades
     "A0522D", "A52A2A", "B5651D", "C68642", "D2691E", "DEB887", "F4A460", "FFE4C4", "8B4513",

    // Blue shades
    "0000FF", "0000CD", "00008B", "000080", "191970", "4169E1", "4682B4", "5F9EA0", "87CEEB", "ADD8E6",

    // Green shades
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
  // console.log(body, color,eyeColor);
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