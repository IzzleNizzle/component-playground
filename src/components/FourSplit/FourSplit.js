import React from 'react';

let fourSplitStyles = {
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "auto auto"
}

let gridItem = {
  maxWidth: "50vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
