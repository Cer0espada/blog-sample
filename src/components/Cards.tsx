import React from 'react';
import balcony from '../img/balcony.jpg';
import author from '../img/author.jpg';

const Cards:React.FC = () => {
    return(
        <div className="blog-cards">
        <div className="blog-cards-container">
            <figure className="blog-cards-image-container">
                <img src={balcony} alt="" className="blog-cards-image-container__image"/>
            </figure>

            <div className="blog-cards-text-container">
                <h1 className="blog-cards-text-container__title">title</h1>
                <p className="blog-cards-text-container__body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur possimus blanditiis expedita recusandae vel amet! Accusamus nesciunt explicabo illum veritatis nostrum quaerat, porro, asperiores exercitationem incidunt amet rem quis.</p>

                    <div className="blog-cards-text-container__author-container">
                        <figure className="blog-cards-text-container__author-container--img-container">
                            <img src={author} alt=""/>
                        </figure>

                        <div className="blog-cards-text-container__author-container--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium dignissimos voluptatum vel quas dolor inventore maiores, reiciendis laudantium beatae alias esse veniam debitis minus sequi obcaecati, illum quod earum.</div>
                </div>
            </div>


        </div>
        </div>
    )
    
}

export default Cards