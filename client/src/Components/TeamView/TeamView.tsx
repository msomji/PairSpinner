import React from 'react'
import Button from '../Button/Button'
import SpinResult from '../SpinResult/SpinResult'
import styles from './TeamView.module.scss'

const TeamView = () => {
  return (
    <div className={`${styles.teamView}`}>
      <SpinResult />
      <div className={`${styles.buttons}`}>
        <span>
          <Button text={'Spin'} type={'is-primary'} />
        </span>
        <span>
          <Button text={'Save'} type={'is-primary'} />
        </span>
      </div>
      <hr />
      <SpinResult />
    </div>
  )
}

export default TeamView
