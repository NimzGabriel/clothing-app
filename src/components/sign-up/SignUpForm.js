import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase/firebase';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';

import "./SignUpForm.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async(ev) => {
    ev.preventDefault();
    
    if(password !== confirmPassword) {
      alert("The passwords do not match")
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

    } catch (error) {
      if(error.code === "auth/email-already-in-use") {
        alert("The email already exist")
      }
      console.log("User creation error: " + error);
    }
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName} />

        <FormInput
          label="E-mail"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email} />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password} />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword} />

        <Button type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  )
}
