import Card from './Shared/Card'
import classes from '../Components/Feedback.module.css'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function FeedbackItem({item}) {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)


    return (
        <Card>
            <div className={classes.num_display}>{item.rating}</div>
            <div className="text-display">
                {item.text}
            </div>
            <button className={classes.btn_edit} onClick={() => editFeedback(item)}><i className='fa fa-edit'></i>   </button>
            <button className={classes.btn_remove} onClick={() => deleteFeedback(item.id)}><i className='fa fa-xmark'></i>   </button>
        </Card>
    )
}

export default FeedbackItem
