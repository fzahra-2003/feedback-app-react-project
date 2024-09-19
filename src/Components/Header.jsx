import React from 'react'
import './Header.module.css'
import PropTypes from 'prop-types' //impt
import '../index.css'

function Header({text='Feedback UI'}) {
    return (
        <header>         
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>

    )
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header
