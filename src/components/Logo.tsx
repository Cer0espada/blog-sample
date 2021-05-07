import React from 'react';
import logo from '../img/logo-1-light.jpg'

const Logo = () => {
    return(
        <div className="logo-container">
            <img src={logo} alt="Prosparity Project Logo" />
            <a href="https://theprosparityproject.org">
                <p>Prosp<span>(</span>A<span>)</span>rity <br/>Project</p>
            </a>
            
        </div>
    )
}

export default Logo