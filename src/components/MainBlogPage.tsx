import React from 'react';

import Cards from './Cards';

const someArray:React.FC[] = [<Cards />, <Cards />, <Cards />, <Cards />];

const MainBlogPage:React.FC = () => {
    return(
        <div className="main-blog-page">
            <div className="main-blog-page-container">

                <div className="main-blog-page-container__trending">
                    <Cards/>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default MainBlogPage