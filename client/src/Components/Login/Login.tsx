import React from 'react'
import styles from './Login.module.scss'
const Login = () => {
  return (
    <form id={`${styles.login}`}>
      <h1 className={`is-primary is-size-3`}>Team Name</h1>
      <input className={`input is-rounded has-background-grey-lighter`} type='text' name='teamName' />

      <h2 className={`is-primary is-size-3`}>Password</h2>
      <input className='input is-rounded has-background-grey-lighter' type='password' name='password' />
    
      <button className={`button is-primary is-rounded is-fullwidth ${styles.register}`}>
        <span className='is-size-3'>Login</span>
      </button>
    </form>
  )

}
export default Login