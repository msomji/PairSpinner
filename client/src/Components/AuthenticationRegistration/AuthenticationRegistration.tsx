import React, { useState } from 'react'
import styles from './AuthenticationRegistration.module.scss'

const AuthenticationRegistration = () => {
  const [currentTab, setTab] = useState('register')

  const setClass = (tab: string) => (currentTab === tab ? 'is-primary' : 'is-light')

  return (
    <div>
        <input  onChange={e => setTab(e.target.value)} hidden type='radio' name='registerOrLogin' id='register' value='register' />
        <input onChange={e => setTab(e.target.value)} hidden type='radio' name='registerOrLogin' id='login' value='login' />

      <div className={`has-addons ${styles.buttonsContainer}`}>
          <label  className={`button ${setClass('register')}`}htmlFor='register'>New Team</label>
          <label className={`button ${setClass('login')}`} htmlFor='login'>Existing Team</label>
      </div>
    </div>
  )
}
export default AuthenticationRegistration
