import React from 'react';
import Cafe from "../Cafe/Cafe";
import "./CafeList.css";

// used rsf + Tab => creates skeleton of React Component
function CafeList() {
  const names = ["Dotor", "McDonald's", "Starbucks"];

  return (
    <div className='cafe-list'>
      { names.map((cafe) =>
      <Cafe cafe={cafe} key={cafe} />)}
    </div>
  );
}

export default CafeList;
