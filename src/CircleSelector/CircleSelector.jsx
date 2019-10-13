import React from 'react';
import './CircleSelector.css';

const CircleSelector = ({numButtons, buttonIdx, handleButton}) => { 
  let buttons = [...Array(numButtons)];
  buttons.forEach((e, idx) => {
  	(buttonIdx === idx ? buttons[idx] = <button className="selected" onClick={() => handleButton(idx)}>Circle {idx + 1} Selected</button> : buttons[idx] = <button onClick={() => handleButton(idx)}>Select Circle {idx + 1}</button>)
  })


  return (
    <div className="CircleSelector">
      {buttons}
    </div>
  )
}

export default CircleSelector;