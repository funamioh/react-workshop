import React from 'react';
import Cafe from "../Cafe/Cafe";
import "./CafeList.css";

// used rsf + Tab => creates skeleton of React Component
function CafeList({cafes}) {
  return (
    <div className='cafe-list'>
      { cafes.map((cafe) =>
      <Cafe cafe={cafe} key={cafe} />)}
    </div>
  );
}

export default CafeList;
