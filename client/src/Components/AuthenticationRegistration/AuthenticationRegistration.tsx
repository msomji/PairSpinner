import React, { useState } from 'react'
import styles from './AuthenticationRegistration.module.scss'
import './AuthenticationRegistration.module.scss'
import Registration from '../Registration/Registration'
import Login from '../Login/Login'

const AuthenticationRegistration = () => {
  const [isRegistration, setIsRegistration] = useState(true)

  const setIsPrimary = (tab: boolean) => (tab ? 'is-primary' : 'is-light')

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.buttonsContainer}`}>
        <input onChange={() => setIsRegistration(true)} hidden type='radio' name='registerOrLogin' id='register' value='register' />
        <input onChange={() => setIsRegistration(false)} hidden type='radio' name='registerOrLogin' id='login' value='login' />

        <div className={`has-addons`}>
          <label className={`button ${styles.label} ${setIsPrimary(isRegistration)}`} htmlFor='register'>
            <span className='is-size-3'>New Team</span>
          </label>

          <label className={`button ${styles.label} ${setIsPrimary(!isRegistration)}`} htmlFor='login'>
            <span className='is-size-3'>Existing Team</span>
          </label>
        </div>
        {isRegistration ? <Registration /> : <Login />}
      </div>
      <div className={`is-size-3 ${styles.moto}`}>
        {' '}
        <p>Leave the pairngs to fate ...</p>
      </div>
    </div>
  )
}
export default AuthenticationRegistration
