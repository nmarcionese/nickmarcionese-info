import React from 'react';
import classes from './Toolbar.module.css';

import Logo from './../Logo/Logo';
import NavItems from './../NavItems/NavItems';
import HamburgerButton from './../HamburgerButton/HamburgerButton';

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <HamburgerButton clicked={props.clicked} />

      <Logo />

      <nav className={classes.DesktopOnly}>
        <NavItems
          resumeClicked={event => props.resumeClicked(event)}
          resumeURL={props.resumeURL}
        ></NavItems>
      </nav>
    </header>
  );
};

export default Toolbar;
