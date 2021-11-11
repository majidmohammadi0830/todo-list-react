import * as React from 'react';
import * as Classes from './Item.module.scss';
import List from '../../components/List/List';
import Master from '../../layout/Master';

const Item = (props) => {
    let id = props.match.params.id;
    return <Master id={id}>
        <List parentId={id} />
    </Master>
}

export default Item;