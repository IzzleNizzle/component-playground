import React from 'react';

export default function Input(props) {
  let check = e => {
    console.log(e.target.checkValidity())
  }
  return (
    <div className="col-md-6">
      <label>
        <strong>{props.title}</strong>
      </label>
      <input
        className="form-control"
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.handleInputChange}
        required={props.required}
        onBlur={() => check}
        onFocus={() => console.log('focus')}
      />
      <div className="invalid-feedback">Hmmm, something's not right.</div>
    </div>
  );
}