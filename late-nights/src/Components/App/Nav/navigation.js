import React from 'react'
import Hamburger from 'hamburger-react'

const Nav = () => {
    return (
       <div className="header">
        <div >
         <h4 className="title">LATE-NIGHTS</h4>
        </div>
            <nav>
            <div className="navigation">
                <Hamburger className="hamburger" label="Show menu" size={15} />
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Late Stories</a>
                <a className="helpButton" href="#">Help</a>
                <a className="loginButton" href="#">Login</a>
                <button className="signUp">Sign Up</button>
            </div>
            </nav>
       </div> 
    )
}

export default Nav