import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Footer = () => {
  return (<footer className="footer has-text-centered has-text-black">
    <p>
      <strong>Pair Spinner</strong> by <a href="https://twitter.com/somji_">Maisam somji</a>.
      Contributions welcomed<a href="http://github.com/msomji/pairSpinner"> <FontAwesomeIcon icon={faGithub} /></a>
    </p>
  </footer>)
}

export default Footer;