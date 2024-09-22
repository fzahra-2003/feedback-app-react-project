import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Use Routes from React Router v6
import Header from './Components/Header'
import FeedbackList from './Components/FeedbackList'
import './index.css'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutPage from './Pages/AboutPage'
import AboutIconLink from './Components/AboutIconLink';
import {FeedbackProvider} from './Context/FeedbackContext';

function App() {  

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
        <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <FeedbackForm />
              <FeedbackStats  />
              <FeedbackList  />
            </>
          }
        />
            <Route path='/about' element={<AboutPage />} />
          </Routes>

        </div>
          <AboutIconLink />
      </Router>
    </FeedbackProvider>
  )
}

export default App

// {/* <Card>Hello world</Card> */}

// bach nhelo problem d props drilling kankhdemo b state management dyal redux toolkit(usecontext + useReducer)