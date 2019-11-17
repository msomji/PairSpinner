import React from 'react'
import styles from './Button.module.scss'

type ButtonType = 'is-primary' | 'is-light'
export interface ButtonProps {
  text: string
  type: ButtonType
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button id={`${styles.button}`} className={`button ${type} is-rounded is-fullwidth`} onClick={onClick}>
      <span className='is-size-3'>{text}</span>
    </button>
  )
}

export default Button
