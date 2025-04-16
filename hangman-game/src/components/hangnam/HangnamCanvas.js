import React from "react";

const HangnamCanvas = ({mistakes}) => {
  const parts = [
    'head',
    'body',
    'left-arm',
    'right-arm',
    'left-leg',
    'right-leg'
  ];

  return (
    <div className="hangnam-canvas">
      {
        parts.slice(0,mistakes).map((part,index)=>(
          <div key={index} className={parts}></div>
        ))
      }
    </div>
  );
}

export default HangnamCanvas;