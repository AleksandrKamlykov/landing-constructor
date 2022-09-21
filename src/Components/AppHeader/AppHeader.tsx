import React, { JSXElementConstructor } from 'react';
import classes from './header.module.scss';
import { NavLink } from "react-router-dom";

export const AppHeader: JSXElementConstructor<any> = () => {

    return (<header className={classes.appHeader}>
        <nav>
            <NavLink className={classes.link} to='/constructor'>Constructor</NavLink>
            <NavLink className={classes.link} to='/'>home</NavLink>
        </nav>
    </header>);
};