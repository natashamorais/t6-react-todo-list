import React from 'react'
import './button.css'

function Button(props){
    let classes = 'button'

    if(props.disabled){
        classes += ' button--disabled'
    }

    return (
        <button type='button'
         className= {classes}
          disabled={props.disabled}> 
        {props.children}
        
        </button> 
    )
}

export default Button

// `{${classes}}`