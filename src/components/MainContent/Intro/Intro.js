import React from 'react';

import classes from './Intro.module.css';
import Section from './../../UI/Section/Section';

const About = props => {
  return (
    <Section className={classes.Intro}>
      <div className={classes.IntroItems}>
        <h4 className={classes.IntroH4}>Hello, my name is</h4>
        <h1 className={classes.IntroH1}>Nicholas Marcionese</h1>
        <h2 className={classes.IntroH2}>
          I'm a Front End Developer based in the Greater Philadelphia Area.
        </h2>
        <h2 className={classes.IntroH2}>
          I'm currently looking for new opportunities.
        </h2>
      </div>
    </Section>
  );
};

export default About;
