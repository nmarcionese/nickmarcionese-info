import React from 'react';
import classes from './Footer.module.css';

import GithubLogo from '../GithubLogo/GithubLogo';
import LinkedinLogo from '../LinkedinLogo/LinkedinLogo';

const Footer = props => {
  console.log(props.linkedinURL);
  return (
    <div className={classes.Footer}>
      <p>nmarcionese@gmail.com</p>
      <ul className={classes.logosHolder}>
        <li onClick={event => props.clicked(event)} data-url={props.githubURL}>
          <GithubLogo />
        </li>
        <li onClick={event => props.clicked(event)} data-url={props.linkedinURL}>
          <LinkedinLogo />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
