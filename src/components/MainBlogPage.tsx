import React from 'react';

import logo from '../img/logo-1-light.jpg';
import Cards from './Cards';
import SearchBar from './SearchBar';
import TitleContainer from './TitleContainer';
import TagContainer from './TagContainer';
import BlogPostGrid from './BlogPostGrid';

const MainBlogPage:React.FC = () => {
    return(
        <div className="main-blog-page">
            <div className="main-blog-page-container">
                <SearchBar/>
                <hr className="hr main-blog-page__hr"/>

                <div className="main-blog-page-container__main-content">

                
                <div className="main-blog-page-container__trending">
                    <TitleContainer title="Trending" heading='h2' addedClass="main-blog-page-container__trending-title"/>
                    <div className="main-blog-page-container__trending--grid">
                        <Cards long="true"/>
                        <Cards />
                        <Cards />
                        <Cards />
                
                    </div>
                    </div>
                <div className="main-blog-page-container__category-container">
                    <div className="main-blog-page-container__category-container--topic-container">
                        <TitleContainer title="Topics" heading="h4" addedClass="title-container__topic"/>
                        <i className="fas fa-globe-africa"></i>
                        <p className="happening-now">Happening Now</p>

                        <i className="fas fa-dollar-sign"></i>
                        <p className="financial-literacy">Financial Literacy</p>

                        <div className="fas fa-graduation-cap"></div>
                        <p className="education">Education</p>

                        <i className="fas fa-female"></i>
                        <p className="black-female-excellence">Black Female Excellence</p>

                        <img src={logo} alt=""/>
                        <p className="prosparity prosparity-topic">Prosparity</p>
                        
                    </div>

                    <div className="main-blog-page-container__category-container--tag-container">
                        <TitleContainer title="Tags" heading="h4" addedClass="title-container__topic" />
                        <p className="tags">#first tag</p>
                        <p className="tags">#second tag</p>
                        <p className="tags">#third tag</p>
                        <p className="tags">#fourth tag</p>
                        <p className="tags">#fifth tag</p>
                        <p className="tags">#sixth tag</p>
                    </div>
                    </div>
                </div>

                <TagContainer />
                <BlogPostGrid />
            </div>
        </div>
    )
}

export default MainBlogPage