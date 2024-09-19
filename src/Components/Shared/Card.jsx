import React, { useState } from 'react'
import classes from '../Feedback.module.css'

function Card({children}) {

    const [col,setColor] = useState()

    return (
        <div className={classes.card} style={{
            backgroundColor: col ? 'rgba(0,0,0,0.4)' :'#fff',
            color : col ? '#fff' : ''}}>
            {children}
        </div>
    )
}

export default Card
