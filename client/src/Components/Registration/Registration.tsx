import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import styles from './Registration.module.scss'

const Registration = () => {
  const [teamMembers, setTeamMembers] = useState(0)
  return (
    <form id={`${styles.registration}`}>
      <h1 className={`is-primary is-size-3`}>Team Members</h1>

      <input className={`input is-rounded has-background-grey-lighter`} type='text' name='teamMember1' />
      <input className='input is-rounded has-background-grey-lighter' type='text' name='teamMember2' />
      <input className='input is-rounded has-background-grey-lighter' type='text' name='teamMember3' />

      {Array(teamMembers)
        .fill('')
        .map((_, index) => (
          <input className='input is-rounded has-background-grey-lighter' type='text' name={`teamMember${index + 4}`} />
        ))}

      
      <button className={`button has-background-light is-rounded ${styles.addMore}`} onClick={(e) => {e.preventDefault(); setTeamMembers(teamMembers + 1)}}>
        <span className='is-size-4'>Add More</span>
      </button>
      <button className={`button is-primary is-rounded is-fullwidth ${styles.register}`}>
        <span className='is-size-3'>Register</span>
      </button>
    </form>
  )
}

export default Registration
