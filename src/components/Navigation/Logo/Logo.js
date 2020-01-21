import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from './../../../assets/logo.png';
import classes from './Logo.module.css';

const Logo = props => {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={LogoImage} alt="Nick Marcionese Logo" />
      </Link>
    </div>
  );
};

export default Logo;
