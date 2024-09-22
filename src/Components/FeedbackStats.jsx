import React from 'react'
import classes from './FeedbackStats.module.css'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)

    //calculate ratings average
    let average = feedback.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')

    return (
        <div className={classes.feedback_stats}>
            <h5>{feedback.length} Reviews</h5>
            <h5>Average Rating: {isNaN(average) ? 0 : average}</h5>
        </div>
    )
}

export default FeedbackStats
