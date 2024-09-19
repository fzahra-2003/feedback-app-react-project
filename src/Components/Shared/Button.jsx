import React from 'react'
import classes from './Button.module.css'

function Button({children, version='primary', type='button', isDisable=false}) {
    return (
        <button type={type} disabled={isDisable} className={`${classes.btn} ${classes['btn_' + version]}`}>
            {children}
        </button>
    )
}

export default Button
