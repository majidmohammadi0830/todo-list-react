import * as React from "react";
import * as Classes from "./List.module.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EditItemInput from "../EditItemInput/EditItemInput";
import AddButton from "../AddButton/AddButton";
import DotButton from "../DotButton/DotButton";

const List = (props) => {
    const state = useSelector((state) => state.listReducer)
    const wholeList = state ? state : [];
    const list = wholeList.filter(x => x.parentId == props.parentId);
    const listRef = React.useRef([]);
    let history = useHistory();

    React.useEffect(() => {
        listRef.current = listRef.current.slice(0, list.length);
    }, [list]);

    const changeEditItemInputFocus = (index, type) => {
        if (listRef.current[index]) {
            listRef.current[index].focus();
        }
    };

    const renderList = () => {
        return list.map((item, index) => {
            return (
                <li className={`${Classes.ListItem} ${item.indent ? Classes.ListItemWithIndent : ""}`}
                    key={index}
                    value={item.id}
                >
                    {renderDotButton(item.id)}
                    <EditItemInput
                        className={Classes.Input}
                        parentId={props.parentId}
                        item={item}
                        index={index}
                        changeFocusOnArrowUp={() => changeEditItemInputFocus(index - 1, "up")}
                        changeFocusOnArrowDown={() => changeEditItemInputFocus(index + 1, "down")}
                        changeFocusOnEnter={() => changeEditItemInputFocus(index + 1, "enter")}
                        changeFocusOnDelete={() => changeEditItemInputFocus(index - 1, "delete")}
                        ref={(el) => (listRef.current[index] = el)}
                    />
                </li>
            );
        });
    };

    const renderDotButton = (id) => {
        const onClick = () => {
            history.push('/item/' + id)
        }
        return <DotButton className={Classes.CircleIcon} onClick={() => onClick()} />
    }

    const addNewItemButton = () => {
        return <AddButton className={Classes.AddButton} parentId={props.parentId} />
    }

    const showTitle = () => {
        let title;
        if (props.parentId) {
            let item = wholeList.filter(x => x.id == props.parentId)[0];
            if (item && item.title)
                title = item.title;
            else
                title = "Untitled"
        }
        else {
            title = "Welcome!"
        }
        return <h3>{title}</h3>

    }

    return (
        <div className={Classes.Content}>
            {showTitle()}
            <ul className={Classes.List}>
                {renderList()}
                {/* {addNewItemInput()} */}
            </ul>
            {addNewItemButton()}
        </div>
    );
};


export default List;