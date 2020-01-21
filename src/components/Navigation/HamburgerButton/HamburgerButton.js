import React from 'react'
import classes from './Hamburger.module.css'

const HamburgerButton = (props) => {
    return (
        <div onClick={props.clicked} className={classes.HamburgerButton}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default HamburgerButton
