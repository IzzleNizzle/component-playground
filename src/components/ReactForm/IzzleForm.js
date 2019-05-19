import React, { useState, useEffect } from 'react';
import Input from './IzzleInput'
import { useDebounce } from 'use-debounce';

// Simple render like this;
export default function IzzleForm() {
  const [formValid, setFormValid] = useState(false);
  const [userInput, setUserInput] = useState({
    lastName: '',
    email: '',
    phoneNumber: ''
  });



  // const [text, setText] = useState('Hello');
  const [debouncedUserInput] = useDebounce(userInput, 1000);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
    // setText(value)
  };

  const validateForm = event => {
    event.preventDefault();
    console.log(event.target.checkValidity());
    // Check validity of form before continuing
    if (event.target.checkValidity()) {
      // Do something / Submit form info
      console.log('Form Submitted!')
      // Clear validation
      clearValidation();
    } else {
      // Some pieces of information missing, adding validation requirement
      needsValidation();
    }
  };

  // Update state to "needs-validation"
  const needsValidation = () => setFormValid(true)

  // Update state to original validation state
  const clearValidation = () => setFormValid(false)





  let myStyles = {
    display: "flex",
    "flexDirection": "column",
    padding: "15px"
  }
  return (

    <div
      style={myStyles}
    >
      <h4>ReactForm3</h4>
      <p>Validate on each input.</p>
      <form
        noValidate // This is important
        className={formValid ? "was-validated" : ""}
      // onSubmit={validateForm}
      // onBlur={(e) => {
      //   console.log(`blur`)
      //   console.log(e);
      //   console.log(e.target);
      //   console.log(e.target.name);
      //   console.log(e.target.checkValidity())
      //   validateForm(e)
      // }}
      >
        <div
          className="form-group row"
        // focusOut={() => (console.log('test'))}

        >
          <Input
            title="Last Name"
            name="lastName"
            type="text"
            value={userInput["lastName"]}
            handleInputChange={handleInputChange}
            required={true}
            invalidMessage={`Something's wrong here`}
            validMessage={`This looks good`}
          />
          <Input
            title="Email"
            name="email"
            type="email"
            value={userInput["email"]}
            handleInputChange={handleInputChange}
            required={true}
            invalidMessage={`Something's wrong here`}
            validMessage={`This looks good`}
          />
          <Input
            title="Phone Number"
            name="phoneNumber"
            type="text"
            value={userInput["phoneNumber"]}
            handleInputChange={handleInputChange}
            required={true}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={validateForm}
        >
          Submit
      </button>
      </form>
      {`${JSON.stringify(debouncedUserInput)} is your debounced text`}

    </div>
  );
}
