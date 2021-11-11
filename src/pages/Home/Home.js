import * as React from 'react';
import * as Classes from './Home.module.scss';
import List from '../../components/List/List';
import Master from '../../layout/Master';

const Home = () => {
    return <Master id={null}>
        <List parentId={null} />
    </Master>
}

export default Home;