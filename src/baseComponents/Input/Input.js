import * as React from "react";
import * as Classes from './Input.module.scss'
const Input = (props, ref) => {
    return <input
        ref={ref}
        value={props.value}
        className={`${props.className} ${Classes.Input}`}
        type={props.type}
        placeholder={props.placeholder}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
        onBlur={props.onBlur}
    />
}

export default React.forwardRef(Input)