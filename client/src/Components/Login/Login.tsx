import React from 'react'
import Button from '../Button/Button'
import styles from './Login.module.scss'
const Login = () => {
  return (
    <form id={`${styles.login}`}>
    
      <label htmlFor="teamName" className={`is-primary is-size-3`}>Team Name</label>
      <input className={`input is-rounded has-background-grey-lighter`} type='text' name='teamName' />
      <label htmlFor="password" className={`is-primary is-size-3`}>Password</label>
      <input className='input is-rounded has-background-grey-lighter' type='text' name='password' />

  <Button text={"Login"} type={"is-primary"}/>
    </form>
  )

}
export default Login