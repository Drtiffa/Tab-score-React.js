import React from "react";
import './Input.css'

const Input = (props) => {
    return (
        <div className="flex">
            <input onChange={props.input} />
            <button onClick={props.btn} className="btn btn-danger">+</button>
        </div>
    )
} 

export default Input;