import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewItemToList, deleteItemFromList } from "../../stateManagement/actionCreators/listActionCreator";
import Input from "../../baseComponents/Input/Input";

const AddItemInput = (props, ref) => {
  const [currentValue, setCurrentValue] = React.useState("");
  const list = useSelector((state) => state.listReducer);
  const dispathcer = useDispatch();

  const addNewItemOnKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      props.changeFocusOnArrowUp();
    } else if (e.key === "Enter") {
      dispathcer(addNewItemToList({ title: currentValue, parentId: props.parentId }));
      setCurrentValue("");
    } else if (currentValue === "" && e.code === "Backspace") {
      dispathcer(deleteItemFromList({ index: list.length - 1 }));
    }
  };

  const addNewItemOnChange = (e) => {
    setCurrentValue(e.target.value);
  };

  return (
    <Input
      type="text"
      className={props.className}
      ref={ref}
      value={currentValue}
      onKeyDown={addNewItemOnKeyDown}
      onChange={addNewItemOnChange}
    />
  );
};

export default React.forwardRef(AddItemInput);
