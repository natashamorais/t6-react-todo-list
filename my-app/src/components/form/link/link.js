import React from 'react'
import './link.css'

function Link(props) {
    return (
        <a
            href={props.href}
            id={props.id}
            className={props.className}>
            {props.children}
        </a>
    )
}


export default Link 