import React from 'react'
import AuthenticationRegistration from '../AuthenticationRegistration/AuthenticationRegistration'
import styles from './LandingPage.module.scss'


const LandingPage = () => {
  return (
    <section className={`${styles.section} is-flex-mobile`}>
      <AuthenticationRegistration />
      <div className={`${styles.background} is-hidden-mobile`}></div>
    </section>
  )
}

export default LandingPage
