/** @format */

import useInput from "../hooks/use-input";
import classes from "./BasicForm.module.css"

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: suggestionValue,
    hasError: suggestionHasError,
    valueChangeHandler: suggestionChangeHandler,
    inputBlurHandler: suggestionBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  
  
  const emailClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  
  let formIsValid = false

  if (firstNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = e => {
    e.preventDefault();
    if (!formIsValid) {
      return
    }
    resetFirstName();
    resetEmail();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            className={classes.input__box}
          />
          {firstNameHasError && (
            <p className='error-text'>Please enter first-Name</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={classes.input__box}
        />
        {emailHasError && (
          <p className='error-text'>Please enter a valid Email</p>
        )}
      </div>
      <div className={firstNameClasses}>
        <label htmlFor='age'>Age (optional)</label>
        <input
          type='number'
          id='age'
          placeholder='Age'
          className={classes.input__box}
        />
      </div>
      <div className={firstNameClasses}>
        <label htmlFor='role'>
          Which option best describes your current role?
        </label>
        <select id='role' name='role' value='Select Current Role'>
          <option value='Fresher'>Fresher</option>
          <option value='Full Stack Developer'>Full Stack Developer</option>
          <option value='DevOps'>DevOps</option>
        </select>
      </div>
      <div className={firstNameClasses}>
        <label htmlFor='role'>
          Would you recomment this application to a friend?
        </label>
        <input
          type='radio'
          id='definitely'
          name='recommend'
          value='definitely'
          className={classes.radio}
        />
        <label className={classes.radio__lbl} htmlFor='definitely'>
          Definitely
        </label>
        <br />
        <input
          type='radio'
          id='maybe'
          name='recommend'
          value='maybe'
          className={classes.radio}
        />
        <label className={classes.radio__lbl} htmlFor='maybe'>
          Maybe
        </label>
        <br />
        <input
          type='radio'
          id='Not_Sure'
          name='recommend'
          value='Not Sure'
          className={classes.radio}
        />
        <label className={classes.radio__lbl} htmlFor='Not_Sure'>
          Not Sure
        </label>
      </div>

      <div className={firstNameClasses}>
        <label htmlFor='feature'>
          Which is your favourite feature of the application?
        </label>
        <select id='feature' name='feature'>
          <option value='All'>All</option>
          <option value='Chat'>Chat</option>
          <option value='Other'>Other</option>
        </select>
      </div>

      <div className={firstNameClasses}>
        <label htmlFor='role'>
          Would you recomment this application to a friend?
        </label>
        <input
          type='radio'
          id='Membership'
          name='fav'
          value='Membership'
          className={classes.radio}
        />
        <label className={classes.radio__lbl} htmlFor='Membership'>
          Membership
        </label>
        <br />
        <input
          type='radio'
          id='Assesments'
          name='fav'
          value='Assesments'
          className={classes.radio}
        />
        <label className={classes.radio__lbl} htmlFor='Assesments'>
          Assesments
        </label>
        <br />
        <input
          type='radio'
          id='projects'
          name='fav'
          value='projects'
          className={classes.radio}
        />
        <label className={classes.radio__lbl} htmlFor='projects'>
          Projects
        </label>
      </div>

      <div className={firstNameClasses}>
        <label htmlFor='suggestion'>Any comments or suggestions?</label>
        <textarea
          type='text'
          id='suggestion'
          value={suggestionValue}
          onChange={suggestionChangeHandler}
          onBlur={suggestionBlurHandler}
          className={classes.input__box}
        />
        {suggestionHasError && (
          <p className='error-text'>Please enter a valid suggestion</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
