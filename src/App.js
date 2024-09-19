import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes from React Router v6
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import  FeedbackData from './data/FeedbackData'
import './index.css'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
// import Card from './Components/Shared/Card.jsx'
import AboutPage from './Pages/AboutPage'


function App() {

  const [feedback , SetFeedback] = useState(FeedbackData)
  
  
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?'))
      SetFeedback(feedback.filter(item => item.id !== id));
  }
  
  const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4();
    SetFeedback([newFeedback,...feedback])
  }

  

  return (
    <Router>
      <Header />
      <h1> HOME PAGE </h1>
      <div className='container'>
      <Routes>
      <Route
        exact
        path='/'
        element={
          <>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
          </>
        }
      />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

// {/* <Card>Hello world</Card> */}

// bach nhelo problem d props drilling kankhdemo b state management dyal redux toolkit(usecontext + useReducer)