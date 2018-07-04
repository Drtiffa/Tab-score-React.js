import React from 'react'
import './Tab.css'

const Tab = props =>
        <tr>
        <td>{props.name}</td>
        <td>{props.score}</td>
        <td>
            <button type="button" class="btn btn-success" onClick={props.incrementeScore}>+</button>
            <button type="button" class="btn btn-success" onClick={props.decrementeScore}>&nbsp;-</button>
        </td>
        </tr>
export default Tab