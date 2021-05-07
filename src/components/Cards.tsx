import React from 'react';
import balcony from '../img/balcony.jpg';
import author from '../img/author.jpg';

interface Props{
long?:string
}

const Cards:React.FC<Props> = ({long}) => {
    return(
        <div className={long ? "blog-cards-long card-text-shadowing": "blog-cards card-text-shadowing"}>
        <div className={long? "blog-cards-long-container" :"blog-cards-container"}>
                <figure className={long ? "blog-cards-long-image-container": "blog-cards-image-container"}>
                <img src={balcony} alt="" className={"blog-cards-image-container__image"}/>
            </figure>

                <div className={long ? "blog-cards-long-text-container": "blog-cards-text-container"}>
                    <h2 className="blog-cards-text-container__category category">category</h2>
                <h1 className={"blog-cards-text-container__title"}>title</h1>
                    <p className={long ? "blog-cards-long-text-container__body": "blog-cards-text-container__body"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur possimus blanditiis expedita recusandae vel amet! Accusamus nesciunt explicabo illum veritatis nostrum quaerat, porro, asperiores exercitationem incidunt amet rem quis.</p>

                    <div className={"blog-cards-text-container__author-container"}>
                        <figure className={"blog-cards-text-container__author-container--img-container"}>
                            <img src={author} alt=""/>
                        </figure>
                        <div className={"blog-cards-text-container__author-container--text-container"}>
                            <p className={"blog-cards-text-container__author-container--text-container__text"}>Maya Lombardi</p>
                            <p className={"blog-cards-text-container__author-container--text-container__date"}>{`Nov 2, 2020`}</p>
                        </div>
                        
                </div>
            </div>


        </div>
        </div>
    )
    
}

export default Cards