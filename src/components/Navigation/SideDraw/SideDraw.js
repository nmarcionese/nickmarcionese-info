import React from 'react';

import Auxiliary from './../../../hoc/Auxiliary/Auxiliary';
import BackDrop from './../../UI/BackDrop/BackDrop';
import NavItems from './../../Navigation/NavItems/NavItems';
import classes from './SideDraw.module.css';
import GithubLogo from '../GithubLogo/GithubLogo';
import LinkedinLogo from '../LinkedinLogo/LinkedinLogo';

const SideDraw = props => {
  let SideDraw_AttachedClasses = [classes.SideDraw, classes.Close];
  if (props.show) {
    SideDraw_AttachedClasses = [classes.SideDraw, classes.Open];
  }

  return (
    <Auxiliary>
      <BackDrop show={props.show} clicked={props.clicked}></BackDrop>

      <div className={SideDraw_AttachedClasses.join(' ')}>
        <nav className={classes.MobileNav}>
          <NavItems
            clicked={props.clicked}
            resumeClicked={event => props.resumeClicked(event)}
            resumeURL={props.resumeURL}
          >
            <GithubLogo
              key={'Mobile_Github_Logo'}
              landingURL={props.landingURL}
            />
            <LinkedinLogo
              key={'Mobile_Linkedin_Logo'}
              landingURL={props.landingURL}
            />
          </NavItems>
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideDraw;
