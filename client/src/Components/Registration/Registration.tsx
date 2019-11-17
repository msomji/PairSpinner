import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './Registration.module.scss'


const Registration = () => {
  const [teamMembers, setTeamMembers] = useState(0)
  return (
    <form id={`${styles.registration}`}>
      <label htmlFor="teamMembers" className={`is-primary is-size-3`}>Team Members</label>
      <input className={`input is-rounded has-background-grey-lighter`} type='text' name='teamMember1s' />
      <input className='input is-rounded has-background-grey-lighter' type='text' name='teamMember2' />
      <input className='input is-rounded has-background-grey-lighter' type='text' name='teamMember3' />

      {Array(teamMembers)
        .fill('')
        .map((_, index) => (
          <input className='input is-rounded has-background-grey-lighter' type='text' name={`teamMember${index + 4}`} />
        ))}

      
      <button className={`button is-light is-rounded ${styles.addMore}`} onClick={(e) => {e.preventDefault(); setTeamMembers(teamMembers + 1)}}>
        <span className='is-size-4'>Add More</span>
      </button>
      <Button text={"Register"} type={"is-primary"}/>
    </form>
  )
}

export default Registration
