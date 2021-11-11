import * as React from 'react';
import * as Classes from './DotButton.module.scss';
import  CircleButton  from '../../baseComponents/CircleButton/CircleButton';
const DotButton = (props) => {
    return <CircleButton onClick={props.onClick} className={`${Classes.DotButton} ${props.className}`}>
    </CircleButton>
}

export default DotButton;