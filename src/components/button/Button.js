import React from 'react'

import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted"
}

export default function Button({ children, buttonType }) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      { children }
    </button>
  )
}
