import React from 'react'
import './index.css'

let progressStyles = {
  display: 'flex',
  // maxHeight: '50px'
}

// Simple render like this;
export default function ProgressBar(props) {

  if (!props.goalSet) {
    return null;
  }
  let progressColor = "progress-bar progress-bar-info";
  if ((props.doneAmount / props.goalAmount * 100).toFixed(0) > 35) {
    progressColor = "progress-bar";
  }
  if ((props.doneAmount / props.goalAmount * 100).toFixed(0) > 70) {
    progressColor = "progress-bar progress-bar-success";
  }
  if ((props.doneAmount / props.goalAmount * 100).toFixed(0) > 99) {
    progressColor = "progress-bar progress-bar-warning";
  }

  return (
    <div style={progressStyles}>
      <div
        className="progress"
        style={{ flexGrow: 2 }}
      >
        <div
          className={progressColor}
          role="progressbar"
          style={{
            minWidth: "2em",
            width: `${props.doneAmount / props.goalAmount * 100}%`,
            maxWidth: "100%"
          }}
        >
          {(props.doneAmount / props.goalAmount * 100).toFixed(0)}%
        </div>
      </div>
      <div
        style={{ marginLeft: '5px' }}
        onClick={props.toggle}
        cursor="pointer"
      >
        <a
          href='#'
          // overwriting default a styles
          style={{
            color: 'black',
            textDecoration: 'none'
          }}
          className="octicon octicon-pencil"></a>
      </div>
    </div>
  );
}
