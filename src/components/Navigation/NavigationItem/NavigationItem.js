import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavigationItem.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const NavigationItem = props => {
  let listItem = null;

  if (props.link) {
    listItem = (
      <li onClick={props.clicked} className={classes.NavigationItem}>
        <Link to={props.link}>{props.title}</Link>
      </li>
    );
  }

  if (props.type === 'button') {
    listItem = (
      <li className={classes.NavigationItem}>
        <button
          data-url={props.resumeURL}
          onClick={event => props.resumeClicked(event)}
        >
          {props.title}
        </button>
      </li>
    );
  }

  if (props.type === 'icon') {
    listItem = (
      <li
        onClick={event => props.sideBarClicks(event)}
        data-url={props.landingURL}
        className={[classes.NavigationItem, classes.Icon].join(' ')}
      >
        {props.children}
      </li>
    );
  }

  return <Auxiliary>{listItem}</Auxiliary>;
};

export default NavigationItem;
