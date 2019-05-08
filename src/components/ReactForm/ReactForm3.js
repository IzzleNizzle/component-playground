import React, { useState } from 'react';
import Input from '../Input'

// Simple render like this;
export default function ReactForm3() {
  const [formValid, setFormValid] = useState(false);

  const [userInput, setUserInput] = useState({
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
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

  return (

    <>
      <h4>ReactForm3, validate on each input.</h4>
      <p>This could be useful if you'd like to trigger validation or submition from somewhere other than the normal submit.</p>
      <form
        noValidate // This is important
        className={formValid ? "was-validated" : ""}
      // onSubmit={validateForm}
      >
        <div className="form-group row">
          <Input
            title="Last Name"
            name="lastName"
            type="text"
            value={userInput["lastName"]}
            handleInputChange={handleInputChange}
            required={true}
          />
          <Input
            title="Email"
            name="email"
            type="email"
            value={userInput["email"]}
            handleInputChange={handleInputChange}
            required={true}
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
      </form>
      <button
        className="btn btn-primary"
        onClick={validateForm}
      >
        Submit
      </button>

    </>
  );
}
