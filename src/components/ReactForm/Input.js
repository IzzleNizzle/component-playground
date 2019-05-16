import React, { useState } from 'react';


let nonValidatedStyles = {
  display: "none"
}

export default function Input(props) {
  // Some state variables for conditionally rendering validation messages
  const [validity, setValidity] = useState(true)
  const [validated, setValidated] = useState(false)

  return (
    <div className="col-md-6">
      <label htmlFor={props.name}>
        <strong>{props.title}</strong>
        <input
          className="form-control"
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={props.handleInputChange}
          required={props.required}
          onBlur={(e) => {
            setValidated(true)
            // console.log(e.target.name)
            setValidity(e.target.checkValidity())
          }}
        />
      </label>
      <div
        // className="invalid-feedback"
        style={!validated ? nonValidatedStyles : null}
      >
        hello world
        {/* {validated ? props.invalidMessage : props.validMessage} */}
      </div>
    </div>
  );
}