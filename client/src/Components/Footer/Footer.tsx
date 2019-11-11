import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer has-text-dark">
      <div className="social">
        <a href="https://github.com/msomji/pairSpinner" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon size="2x" icon={faGithub} /></a>
        <a href="https://www.twitter.com/somji_" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon size="2x" icon={faTwitter} /></a>
      </div>
      <div className="copyright">© PairSpinner, 2019</div>
    </footer>
  )
}

export default Footer
