import React from 'react';

let fourSplitStyles = {
  height: "100vh",
  display: "grid",
  "grid-template-columns": "auto auto"
}

let gridItem = {
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  border: "blue 1px solid"
}

// Simple render like this;
export default function FourSplit(props) {
  return (
    <main style={fourSplitStyles}>
      <div style={gridItem}>
        {props.elemOne}
      </div>

      <div style={gridItem}>
        {props.elemTwo}
      </div>

      <div style={gridItem}>
        {props.elemThree}
      </div>

      <div style={gridItem}>
        {props.elemFour}
      </div>

    </main>
  );
}
