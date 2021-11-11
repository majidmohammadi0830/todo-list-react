import * as React from 'react';
import * as Classes from './MainContent.module.scss';
import List from '../List/List';

const MainContent = (props) => {
    return <div className={Classes.Content}>
        {props.children}
    </div>
}

export default MainContent;