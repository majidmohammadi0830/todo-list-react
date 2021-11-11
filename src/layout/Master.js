import * as React from 'react';
import * as Classes from './Master.module.scss';
import SideBar from '../components/SideBar/SideBar';
import NavBar from '../components/NavBar/NavBar';
import MainContent from '../components/MainContent/MainContent';

const Master = (props) => {
    return <div className={Classes.Content}>
        <div className={Classes.LeftContent}>
            <SideBar />
        </div>
        <div className={Classes.RightContent}>
            <NavBar id={props.id} className={Classes.NavBar} />
            <MainContent className={Classes.MainContent}>
                {props.children}
            </MainContent>
        </div>

    </div>
}

export default Master;