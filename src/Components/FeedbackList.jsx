import {motion,AnimatePresence} from 'framer-motion'
import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0) {
        return <p style={{color:'#ff6a95', fontSize:'25px', textAlign:'center', fontWeight:'bold', marginTop:'50px'}}>No feedback yet</p>
    }

    // const showData = feedback.map((item, index) =>
    //         <FeedbackItem 
    //             key={index}
    //             item={item}
    //             handleDelete ={handleDelete }
    //             />)    
    
    return (
        <div style={{

            }}>
        
            <AnimatePresence>
                {feedback.map((item) =>(
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: item.id * 0.1 }} // Staggered animation 
                        layout
                    >
                        <FeedbackItem 
                            key={item.id}
                            item={item}
                            handleDelete ={handleDelete }
                            />
                    </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList
