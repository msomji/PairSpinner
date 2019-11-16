import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Footer.module.scss'


const Footer = () => {
  return (
    <footer className={`footer has-text-dark has-background-light ${styles.footer}`}>
      <div className={`social`}>
        <a href='https://github.com/msomji/pairSpinner' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon size='2x' icon={faGithubSquare} color='#2F2F2F' />
        </a>
        <a href='https://www.twitter.com/somji_' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon size='2x' icon={faTwitterSquare} color='#1DA1F2' />
        </a>
      </div>
      <div className='is-size-5'>©PairSpinner 2019</div>
    </footer>
  )
}

export default Footer
