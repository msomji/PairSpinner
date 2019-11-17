import React from 'react'
import PairContainer from '../PairContainer/PairContainer'
import styles from './SpinResult.module.scss'

const SpinResult = () => {
  return (
  <div className={`${styles.spinResult}`}>
    <h1 className={`is-size-4 is-flex-touch`}>Spin Date: 12.12.2019</h1>
  <div className={`${styles.newPairs}`}>
    <PairContainer />
    <PairContainer />
    <PairContainer />
    <PairContainer />
    <PairContainer />
    <PairContainer />
  </div>
  </div>
  )
}

export default SpinResult;