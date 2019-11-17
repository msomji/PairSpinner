import React from 'react';
import styles from './PairCard.module.scss'

const PairCard = () => {
  return (
    <div className={`${styles.pairCard} has-background-light`}>
      
      <img src="https://placebeard.it/150" alt=""/>
      <h1 className={`has-text-primary is-size-4`}>Some Name</h1>

      
    </div>
  )
}

export default PairCard