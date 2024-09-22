import React from 'react'
import Card from '../Components/Shared/Card'
import { Link } from 'react-router-dom'; 


function AboutPage() {
    return (
        <Card>
            <h1 style={{textAlign:'center', marginBottom:'15px'}}>About This Project</h1>
            <p style={{fontSize:'18px', marginBottom:'13px'}}>This is a react app to leave feedback for a product or service </p>
            <p style={{fontSize:'18px', marginBottom:'13px'}}>Version: 10.0.1</p>
            <Link to="/">Back To Home</Link>
        </Card>
    )
}

export default AboutPage
