import * as React from 'react';
import * as Classes from './NavBar.module.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return <div className={Classes.Content}>
        <Breadcrumb id={props.id} />
    </div>
}

export default NavBar;