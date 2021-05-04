import React,{useMemo, useState} from 'react';
import Cards from './Cards';
import {Pagination} from 'antd';

const someArray = [<Cards />, <Cards />, <Cards />, <Cards />, <Cards />]
const BlogPostGrid:React.FC = () => {
    const [pageSize, setPageSize] = useState(6);
    const [current, setCurrent] = useState(1);
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState("")
    const paginatedPosts = useMemo(() => {
        const lastIndex = current * pageSize
        const firstIndex = lastIndex - pageSize

        return someArray.slice(firstIndex, lastIndex)
    }, [current, pageSize, posts])

    return(
        <div className="blog-post-grid">
            <div className="blog-post-grid-container">
                <div className="blog-post-grid-container__title-container">
                    <h1 className="blog-post-grid-container__title-container--title">All Posts</h1>

                    <div className="blog-post-grid-container__title-container--dropdown filter">
                        Filter
                    </div>
                    <div className="blog-post-grid-container__title-container--dropdown filter">
                        Filter
                    </div>

                </div>

                <div className="blog-post-grid-container__grid">
                    {someArray.map((item, index) => (<Cards/>))}
                </div>
                    
                <Pagination
                    simple
                    showSizeChanger
                    onShowSizeChange={setPageSize}
                    pageSize={pageSize}
                    total={posts.length}
                    defaultCurrent={current}
                    onChange={setCurrent}
                />

            </div>
        </div>
    )
}

export default BlogPostGrid