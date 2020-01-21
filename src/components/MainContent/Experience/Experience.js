import React from 'react';
import Section from './../../UI/Section/Section';
import classes from './Experience.module.css';

const Experience = () => {
  return (
    <Section className={[classes.Experience, classes.FlexStart].join(' ')}>
      <h3 className={classes.expSec__headerThree}>#Experience</h3>
      <div className={classes.expSec__Items}>
        <div className={classes.expSec__expDiv}>
          <h5 className={classes.expSec__headerFive}>
            Senior Creative Developer
            <span className={classes.expSec__spanBlue}>@Sizmek</span>
          </h5>
          <h6 className={classes.expSec__headerSix}>
            November 2015 - March 2019
          </h6>
        </div>
        <div className={classes.expSec__expDiv}>
          <h5 className={classes.expSec__headerFive}>
            Senior Creative Developer
            <span className={classes.expSec__spanBlue}>@Cofactor</span>
          </h5>
          <h6 className={classes.expSec__headerSix}>
            July 2014 - November 2015
          </h6>
        </div>
        <div className={classes.expSec__expDiv}>
          <h5 className={classes.expSec__headerFive}>
            Senior Production Engineer, Team Lead
            <span className={classes.expSec__spanBlue}>@Pointroll</span>
          </h5>
          <h6 className={classes.expSec__headerSix}>July 2012 - July 2014</h6>
        </div>
        <div className={classes.expSec__expDiv}>
          <h5 className={classes.expSec__headerFive}>
            Senior Production Engineer
            <span className={classes.expSec__spanBlue}>@Pointroll</span>
          </h5>
          <h6 className={classes.expSec__headerSix}>July 2011 - July 2012</h6>
        </div>
        <div className={classes.expSec__expDiv}>
          <h5 className={classes.expSec__headerFive}>
            Production Engineer
            <span className={classes.expSec__spanBlue}>@Pointroll</span>
          </h5>
          <h6 className={classes.expSec__headerSix}>
            September 2009 - June 2011
          </h6>
        </div>
        <div className={classes.expSec__expDiv}>
          <h5 className={classes.expSec__headerFive}>
            Junior Production Engineer
            <span className={classes.expSec__spanBlue}>@Pointroll</span>
          </h5>
          <h6 className={classes.expSec__headerSix}>
            June 2008 - September 2009
          </h6>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
