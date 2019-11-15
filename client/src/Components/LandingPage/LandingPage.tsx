import React from 'react'
import AuthenticationRegistration from '../AuthenticationRegistration/AuthenticationRegistration'
import styles from './LandingPage.module.scss'


const LandingPage = () => {
  return (
    <section className={styles.section}>
      <AuthenticationRegistration />
      <div className={styles.background}></div>
    </section>
  )
}

export default LandingPage
