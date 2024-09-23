import React, { useState, useEffect, useContext } from 'react'
import classes from './FeedbackForm.module.css'
import FeedbackContext from '../Context/FeedbackContext'

function RatingSelect({ select, selected }) {
    const { feedbackEdit } = useContext(FeedbackContext);

    // Initialize with the 'selected' prop (or default to 10) 
    const [rating, setRating] = useState(selected || 10);  

    // Sync rating with the feedbackEdit when in edit mode
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setRating(feedbackEdit.item.rating); // Set rating based on the current feedback item being edited
        }
    }, [feedbackEdit]);

    // Handle change event
    const handleChange = (e) => {
        const newRating = +e.currentTarget.value;
        setRating(newRating);
        select(newRating); // Pass the selected rating back to the parent component
    }

    return (
        <ul className={classes.rating}>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={rating === i + 1} // Use rating state for checked value
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    )
}

export default RatingSelect
