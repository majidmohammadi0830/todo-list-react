import * as React from 'react';
import * as Classes from './AddButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItemToList } from '../../stateManagement/actionCreators/listActionCreator';
import CircleButton from '../../baseComponents/CircleButton/CircleButton';

const AddButton = (props) => {
    const dispathcer = useDispatch();

    const onClick = () => {
        dispathcer(addNewItemToList({ title: "", withIndent: false, parentId: props.parentId }));
    }
    return <CircleButton
        onClick={onClick}
        className={props.className}>
        +
    </CircleButton>
}

export default AddButton;
