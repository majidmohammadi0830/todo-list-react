import * as React from 'react';
import * as Classes from './Breadcrumb.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listHelper } from '../../utility/listHelper';

const Breadcrumb = (props) => {
    const wholeList = useSelector((state) => state.listReducer);
    if (!props.id)
        return <></>

    const renderParents = () => {
        const parents = [];
        const item = wholeList.filter((x) => x.id == props.id)[0];
        parents.push(item);
        if (item.parentId)
            listHelper.findParents(item, parents, wholeList);
        return parents.reverse().map((item, index) => (
            <>
                <Link to={"/item/" + item.id} className={`${Classes.LinkItem} ${item.id == props.id ? Classes.CurrentLinkItem : ""}`} >
                    {item.title ? item.title : "Untitled"}
                </Link>
                {index == parents.length - 1 ? "" : ` > `}
            </>
        ))
    }

    return <div className={Classes.Breadcrumb}>
        <Link to="/" className={Classes.LinkItem}>Home {'>'} </Link>
        {renderParents()}
    </div>
}

export default Breadcrumb;