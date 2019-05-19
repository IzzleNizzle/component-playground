import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDebouncedCallback } from 'use-debounce';

let nonValidatedStyles = {
  display: "none"
}

export default function IzzleInput(props) {
  // Reference to Input Dom Elem, used for checking validation debounced and systematically
  const inputRef = useRef(null);
  // Some state variables for conditionally rendering validation messages
  const [validity, setValidity] = useState(true)
  const [validated, setValidated] = useState(false)

  const [hasBounced, setHasBounced] = useState(false)
  // Debounce user input
  const [debouncedFunction, cancel] = useDebouncedCallback(
    // to memoize debouncedFunction we use useCallback hook.
    // In this case all linters work correctly
    useCallback((ev) => {
      setHasBounced(true)
      setValidated(true)
      setValidity(ev.checkValidity())
    }, []),
    1300,
    // The maximum time func is allowed to be delayed before it's invoked:
    { maxWait: 5000 }
  );

  // Handle dismount
  useEffect(() => {
    return cancel
  }, [])

  useEffect(() => {
    if (props.value === '') {
      setValidated(false)
      setHasBounced(false)
    }
  }, [props.value])

  const validateInput = ev => {
    setValidated(true)
    setValidity(ev.checkValidity())
  }

  return (
    <div className="col-md-6">
      <label htmlFor={props.name}>
        <strong>{props.title}</strong>
      </label>
      <input
        ref={inputRef}
        className="form-control"
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={e => {
          hasBounced ? validateInput(e.target) : debouncedFunction(e.target)
          props.handleInputChange(e)
        }}
        required={props.required}
        onBlur={(ev) => {
          cancel()
          setValidated(true)
          setValidity(ev.target.checkValidity())
        }}
      />
      <div
        style={!validated ? nonValidatedStyles : null}
      >
        {/* If Validated, display valid/invalid message */}
        {validated ? validity ? props.validMessage : props.invalidMessage : null}
      </div>
    </div>
  );
}