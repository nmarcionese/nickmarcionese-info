import React from 'react';
import NavigationItem from './../NavigationItem/NavigationItem';
import classes from './NavItems.module.css';

const NavItems = props => {
  let logos = null;
  if (props.children) {
    logos = props.children.map(logo => {
      console.log(props);
      return (
        <NavigationItem
          sideBarClicks={event => logo.props.sideBarClicks(event)}
          key={logo.key}
          landingURL={logo.props.landingURL}
          type="icon"
        >
          {logo}
        </NavigationItem>
      );
    });
  }
  return (
    <ul className={classes.NavItems}>
      <NavigationItem
        clicked={props.clicked}
        link={'about'}
        title={'#About'}
        type={'link'}
      />
      <NavigationItem
        clicked={props.clicked}
        link={'experience'}
        title={'#Experience'}
        type={'link'}
      />
      <NavigationItem
        clicked={props.clicked}
        link={'portfolio'}
        title={'#Portfolio'}
        type={'link'}
      />
      <NavigationItem
        resumeClicked={event => props.resumeClicked(event)}
        resumeURL={props.resumeURL}
        link={'Resume'}
        title={'Resume'}
        type={'button'}
      />
      {props.children ? (
        <div className={classes.logoHolder}>{logos}</div>
      ) : null}
    </ul>
  );
};

export default NavItems;
