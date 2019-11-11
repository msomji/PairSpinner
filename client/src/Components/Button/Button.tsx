import React from 'react'

import './Button.scss'

type buttonType = 'main'
export interface ButtonProps {
  readonly text: string
  readonly type?: buttonType
}

const Button = ({ text, type = 'main' }: ButtonProps) => {
  return (
    <button
      id="custom-button"
      className={`custom-button button is-primary has-text-secondary is-large ${type}`}
    >
      {text}
    </button>
  )
}

export default Button
