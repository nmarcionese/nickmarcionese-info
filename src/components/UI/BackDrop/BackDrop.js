import React from 'react';
import Auxiliary from './../../../hoc/Auxiliary/Auxiliary';
import classes from './BackDrop.module.css';

const BackDrop = props => {
  return (
    <Auxiliary>
      {props.show ? <div onClick={props.clicked} className={classes.BackDrop}></div> : null}
    </Auxiliary>
  );
};

export default BackDrop;
