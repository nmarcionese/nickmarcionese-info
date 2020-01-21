import React from 'react';
import Section from './../../UI/Section/Section';
import classes from './About.module.css';

const About = props => {
  return (
    <Section className={classes.About}>
      <h3 className={classes.Abouth3}>#About Me</h3>

      <div className={classes.AboutParagraphs}>
        <p>
          Front end developer in the Greater Philadelphia Area with 10+ years of
          experience in the ad-tech industry using JavaScript, CSS and HTML to
          build dynamic, data-driven web and mobile advertisements. Looking to
          grow my career outside of ad-tech through a more traditional
          UI/Frontend Developer position.
        </p>
        <p>
          Recently completed the Penn LPS Coding Boot Camp to align myself with
          current technologies needed to succeed in today’s market.
        </p>
        <p>
          I consider myself a dedicated and hard working team member. I enjoy
          helping my fellow team members whenever a problem needs a solution,
          and willing to put in the extra work to make sure the issue is fixed
          in a timely manner.
        </p>
      </div>
    </Section>
  );
};

export default About;
