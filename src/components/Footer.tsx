import React from 'react';

let currentYear:number = new Date().getFullYear();
const Footer:React.FC = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <h2 className="footer-container__heading">The Prosparity Project Blog</h2>
                <p className="footer-container__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem obcaecati, ullam fugit quaerat cupiditate velit</p>

                <div className="footer-container__icon-container">
                    <i className="fab fa-instagram footer-container__icon-container--icon"></i>
                    <i className="fab fa-facebook footer-container__icon-container--icon"></i>
                    <i className="fab fa-twitter footer-container__icon-container--icon"></i>
                    <i className="fab fa-linedin footer-container__icon-container--icon"></i>
                </div>
                
    <p className="copyright"> copyright &#169; {`${currentYear}`} </p>
            </div>
        </div>

    )
}

export default Footer;