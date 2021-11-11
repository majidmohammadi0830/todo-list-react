import * as React from "react";
import * as Classes from './EditItemInput.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { addNewItemToList, deleteItemFromList, updateItemInList } from "../../stateManagement/actionCreators/listActionCreator";
import Input from "../../baseComponents/Input/Input";

const EditInput = (props, ref) => {
    const list = useSelector((state) => state.listReducer)
    const dispatcher = useDispatch();
    const editItemOnKeyDown = (e, item, i) => {
        if (e.key === "ArrowUp") {
            props.changeFocusOnArrowUp();
        } else if (e.key === "ArrowDown") {
            props.changeFocusOnArrowDown();
        } else if (e.key === "Enter") {
            dispatcher(addNewItemToList({ title: "", withIndent: false, parentId: props.parentId/*, atIndex: i + 1*/ }));
            setTimeout(() => {
                props.changeFocusOnEnter();
            }, 100)
        } else if (item.title === "" && e.code === "Backspace") {
            dispatcher(deleteItemFromList({ id: item.id }));
            setTimeout(() => {
                props.changeFocusOnDelete();
            }, 100)
        }
        else if (e.ctrlKey && e.shiftKey && e.key === "Delete") {
            dispatcher(deleteItemFromList({ id: item.id }));
            e.preventDefault();
            setTimeout(() => {
                props.changeFocusOnDelete();
            }, 100)
        } else if (e.shiftKey && e.key === "Tab") {
            dispatcher(updateItemInList({ id: item.id, title: item.title, indent: false }));
            e.preventDefault();
        } else if (e.key === "Tab") {
            dispatcher(updateItemInList({ id: item.id, title: item.title, indent: true }));
            e.preventDefault();
        }
    };

    const editItemOnChange = (e, id) => {
        dispatcher(updateItemInList({ id: id, title: e.target.value }));
    };

    return (
        <Input
            type="text"
            className={props.className}
            ref={ref}
            value={props.item.title}
            onChange={(e) => editItemOnChange(e, props.item.id)}
            onKeyDown={(e) => editItemOnKeyDown(e, props.item, props.index)}
        />
    );
};

export default React.forwardRef(EditInput);
