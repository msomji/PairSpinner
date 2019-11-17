import React from 'react'
import PairCard from '../PairCard/PairCard'
import styles from './PairContainer.module.scss'

const PairContainer = () => {
  return (
    <div className={`${styles.pairContainer} has-background-grey-lighter`}>
      <PairCard />
      <PairCard />
    </div>
  )
}

export default PairContainer
