import * as React from 'react';
import * as Classes from './CircleButton.module.scss';
const CircleButton = (props) => {
    return <button
        onClick={props.onClick}
        className={`${Classes.CircleButton} ${props.className}`} >
        {props.children}
    </button>
}

export default CircleButton;