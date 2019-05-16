import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDebouncedCallback } from 'use-debounce';

let nonValidatedStyles = {
  display: "none"
}

export default function Input(props) {
  // Some state variables for conditionally rendering validation messages
  const [validity, setValidity] = useState(true)
  const [validated, setValidated] = useState(false)
  // Debounce user input
  const [debouncedFunction, cancel] = useDebouncedCallback(
    // to memoize debouncedFunction we use useCallback hook.
    // In this case all linters work correctly
    useCallback((ev) => {
      // props.handleInputChange(ev, val)
      console.log(`interesting test ${ev.checkValidity()}`);

      setValidated(true)
      setValidity(ev.checkValidity())
    }, []),
    1300,
    // The maximum time func is allowed to be delayed before it's invoked:
    { maxWait: 5000 }
  );
  // const isInitialMount = useRef(true);

  // Handle dismount
  useEffect(() => {
    return cancel
  })

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     // Your useEffect code here to be run on update
  //     setValidity(ev.target.checkValidity())
  //     setValidated(true)
  //   }
  // }, [debouncedUserInput]);

  return (
    <div className="col-md-6">
      <label htmlFor={props.name}>
        <strong>{props.title}</strong>
      </label>
      <input
        className="form-control"
        type={props.type}
        // value={props.value}
        name={props.name}
        onChange={e => {
          // props.handleInputChange(e)
          debouncedFunction(e.target)
        }}
        required={props.required}
      // onBlur={(e) => {
      //   setValidated(true)
      //   console.log(e.target.checkValidity())
      //   // console.log(e.target.name)
      //   // setValidity(e.target.checkValidity())
      // }}
      />
      <div
        // className="invalid-feedback"
        style={!validated ? nonValidatedStyles : null}
      >
        {/* If Validated, display valid/invalid message */}
        {validated ? validity ? props.validMessage : props.invalidMessage : null}

        {/* {debouncedUserInput} */}
      </div>
    </div>
  );
}