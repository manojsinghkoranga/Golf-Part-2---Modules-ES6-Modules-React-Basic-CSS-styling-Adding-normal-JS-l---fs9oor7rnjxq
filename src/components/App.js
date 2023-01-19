import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
  };
  const renderChoice = () => {
    if(renderBall) {
      return ( 
        <>
          <div className="ball" style={{left: `${x}px`, top: `${y}px`}}></div>
        </>
      )
    }

    return (
      <button onClick={() => setRenderBall(true)} className="start">
        Start
      </button>
    )
  };

  useEffect(() => {
    const handler = (event) => {
      if(event.key === "ArrowRight"){
        setX(x+5);
      }
      if(event.key === "ArrowUp"){
        setY(y-5);
      }
      if(event.key === "ArrowLeft"){
        setX(x-5);
      }
      if(event.key === "ArrowDown"){
        setY(y+5);
      }
    }

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    }
  }, [x, y])

  return (
    <div className="playground">
      <button  className="reset" onClick={reset}>
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
