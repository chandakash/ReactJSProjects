import React, { useState } from "react";
import "./App.css";

function App() {
  const [horLength, setHorLength] = useState(10);
  const [verLength, setVerLength] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState("black");

  const styleObj = {
    fontSize: 30,
    color: "#4a54f1",
    // textAlign: "center",
    // margin: "auto",
  };
  return (
    <div>
      <p className="title">
        <b>Box Shadow Generator</b>
      </p>
      <div className="App">
        <div className="controls">
          <p class="range-field">
            <label>Horizontal length = {horLength}</label>
            <input
              type="range"
              id="horLength"
              min="-200"
              max="200"
              value={horLength}
              onChange={(e) => setHorLength(e.target.value)}
            />

            <label>Vertical length = {verLength}</label>
            <input
              type="range"
              id="verLenght"
              min="-200"
              max="200"
              value={verLength}
              onChange={(e) => setVerLength(e.target.value)}
            />

            <label>Blur = {blur}</label>
            <input
              type="range"
              id="blur"
              min="0"
              max="200"
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
            />

            <label>Color = {color}</label>
            <br></br>
            <input
              type="color"
              id="colorId"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </p>
        </div>
        <div className="output">
          <div
            className="box"
            style={{
              boxShadow: `${horLength}px ${verLength}px ${blur}px ${color}`,
            }}
          >
            <p className="boxText">
              <b>box-shadow:</b>
              {horLength}px {verLength}px {blur}px {color}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
