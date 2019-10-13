import React from 'react';
import './Circles.css';

const Circles = ({numCircles, circleIdx}) => { 
  let circles = [...Array(numCircles)];
  circles.forEach((e, idx) => {
    (circleIdx === idx ? circles[idx] = <div className="selected">{idx+1}</div> : circles[idx] = <div>{idx+1}</div>)
  })

  return (
    <div className="Circles">
      {circles}
    </div>
  )
}

export default Circles;