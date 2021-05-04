import React from 'react';
import {Link} from 'react-router-dom'
import Logo from './Logo';
const Header:React.FC = () => {
    return(
        <div className="header">
            <nav className="header-container">
                <Logo/>
                <Link className="header-container__link"to="#">Offerings</Link>
                <Link className="header-container__link"to="#">Offerings</Link>
                <Link className="header-container__link"to="#">Offerings</Link>
                <Link className="header-container__link"to="#">Offerings</Link>
                <Link className="header-container__link--donate"to="https://theprosparityproject.org/donate">Donate</Link>
            </nav>
        </div>
    )
}

export default Header