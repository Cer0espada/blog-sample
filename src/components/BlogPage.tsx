import React from 'react';
import SearchBar from './SearchBar';
import Tagcontainer from './TagContainer';

import author from '../img/author.jpg'
import bank from '../img/bank.jpg';
const BlogPage:React.FC = () => {
    return(
        <div className="blog-page">
            <div className="blog-page-container">
                <SearchBar extended={true}/>
                <hr/>
                <div className="blog-page-container__heading-container">
                    <h2 className="blog-page-container__heading-container--category">category</h2>

                    <h1 className="blog-page-container__heading-container--heading">Tax incentive for Black Female Entrepreneuers</h1>
                    <h3 className="blog-page-container__heading-container--subtitle">Discover grants and programs that you cana find and use to help your business grow</h3>

                    <div className="blog-page-container__heading-container--author-container">
                        <figure>
                            <img src={author} alt="" className="blog-page-container__heading-container--author-container__img"/>
                        </figure>
                        
                        <h4 className="blog-page-container__heading-container--author-container__author-name">Layla Durvernee</h4>
                        <p className="blog-page-container__heading-container--author-container__author-date">Nov 2, 2020</p>
                    </div>

                    <div className="blog-page-container__heading-container--icon-container">
                        <i className="fab fa-instagram blog-page-container__heading-container--icon-container__icon"></i>
                        <i className="fab fa-facebook blog-page-container__heading-container--icon-container__icon"></i>
                        <i className="fab fa-twitter blog-page-container__heading-container--icon-container__icon"></i>
                        <i className="fab fa-linedin blog-page-container__heading-container--icon-container__icon"></i>
                    </div>

                </div>

                <figure className="blog-page-container__main-img-container">
                    <img src={bank} alt="" className="blog-page-container__main-img-container--main-img"/>
                    <figcaption className="blog-page-container__main-img-container--figcaption">Caption</figcaption>
                </figure>

                <main className="blog-page-container__main-content-container">
                    <h3 className="blog-page-container__main-content-container--heading">Here is a title</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse harum beatae et neque atque, recusandae provident quasi aliquid debitis, mollitia a laboriosam praesentium ullam sit, odit sed ipsa veritatis laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat a iste provident facilis quod eius enim sit? Ut, veritatis. Earum totam repellat sit. Vero veniam beatae magni nihil earum nisi.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil ea corporis sunt inventore voluptatibus quos, reprehenderit rem impedit minus officia, eos ducimus commodi exercitationem quidem placeat sit atque illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae est enim dignissimos dolore beatae fugiat delectus neque. Voluptatum sunt libero officiis sit dolores corrupti neque vero impedit, provident error assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat laudantium aperiam enim iure, numquam cumque ratione magnam doloribus corporis temporibus sunt veritatis qui. Quod laborum fugiat reprehenderit iusto ea? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, dicta totam nostrum molestiae eos quia cupiditate suscipit alias. Iusto laboriosam mollitia facere quidem labore deserunt minima itaque voluptas ab cumque.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate reiciendis quis porro non fugit praesentium autem ea minus quam error illo minima cupiditate tempora quibusdam maiores repellat, rem atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ad aliquid nam recusandae voluptates inventore cupiditate sunt, facilis fugit est illo tempora! Perspiciatis sint ullam cupiditate illum architecto fugiat necessitatibus.</p>
                </main>

                <div className="blog-page-container__blog-tag-container">
                    <h2 className="blog-page-container__blog-tag-container--heading">Tags</h2>

                    <div className="blog-page-container__blog-tag-container--grid-container">
                        <p className="blog-page-container__blog-tag-container--grid-container__blog-tag">#first tag</p>
                        <p className="blog-page-container__blog-tag-container--grid-container__blog-tag">#second tag</p>
                        <p className="blog-page-container__blog-tag-container--grid-container__blog-tag">#third tag</p>
                        <p className="blog-page-container__blog-tag-container--grid-container__blog-tag">#fourth tag</p>
                    </div>
                    <hr/>


                    <Tagcontainer />

                </div>


            </div>
        </div>
    )
}

export default BlogPage;