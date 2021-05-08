/** @format */

import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  //Name Input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  //Email Input
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes('@'));


  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    resetNameInput();
    resetEmailInput()
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && <p>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Name</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputHasError && <p>Please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
