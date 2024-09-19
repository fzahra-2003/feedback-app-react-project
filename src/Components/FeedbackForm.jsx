import React, { useState } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import classes from './FeedbackForm.module.css'
import RatingSelect from './RatingSelect'


function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === '')
            {
                setBtnDisabled(true)
                setMessage(null)
            }
        else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 caracters')
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        
        setText(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = { text, rating };
            handleAdd( newFeedback);
            setText('')
        }
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h3 style={{color: '#131428', textAlign: 'center', fontSize:'18px'}}>How would you rate your service with us?</h3>
                {/*@todo - rating select component */}
                <RatingSelect select={setRating} selected={rating}/>
                <div className={classes.input_group}>
                    <input type="text" placeholder='Write a review ...'
                        onChange={handleTextChange} value={text}
                    />
                    <Button type='submit' isDisable={btnDisabled} version='secondary' >Send</Button>
                </div>
                {message && <div className={classes.message} >{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
