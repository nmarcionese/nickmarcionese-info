import React from 'react';
import classes from './Section.module.css';

const Section = props => {
  let sectionClasses = classes.Section;
  if (props.className) {
    sectionClasses = [classes.Section, props.className].join(' ');
  }
  return <section id={props.id ? props.id : null} className={sectionClasses}>{props.children}</section>;
};

export default Section;
