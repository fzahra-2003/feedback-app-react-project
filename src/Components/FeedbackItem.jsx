import Card from './Shared/Card'
import classes from '../Components/Feedback.module.css'

function FeedbackItem({item , handleDelete}) {



    return (
        <Card>
            <div className={classes.num_display}>{item.rating}</div>
            <div className="text-display">
                {item.text}
            </div>
            <button className={classes.btn_remove} onClick={() => handleDelete(item.id)}><i className='fa fa-xmark'></i>   </button>
        </Card>
    )
}

export default FeedbackItem
