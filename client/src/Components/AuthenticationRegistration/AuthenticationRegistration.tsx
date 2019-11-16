import React, { useState } from 'react'
import styles from './AuthenticationRegistration.module.scss'
import './AuthenticationRegistration.module.scss'
import Registration from '../Registration/Registration'
import Login from '../Login/Login'

const AuthenticationRegistration = () => {
  const [isRegistration, setCurrentTab] = useState(true)

  const setCurrentClass = (tab: boolean) => (tab ? 'is-primary' : 'is-light')

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.buttonsContainer}`}>
        <input onChange={() => setCurrentTab(true)} hidden type='radio' name='registerOrLogin' id='register' value='register' />
        <input onChange={() => setCurrentTab(false)} hidden type='radio' name='registerOrLogin' id='login' value='login' />

        <div className={`has-addons`}>
          <label className={`button ${styles.label} ${setCurrentClass(isRegistration)}`} htmlFor='register'>
            <span className='is-size-3'>New Team</span>
          </label>

          <label className={`button ${styles.label} ${setCurrentClass(!isRegistration)}`} htmlFor='login'>
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
