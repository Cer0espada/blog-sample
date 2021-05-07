import React,{useMemo, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BlogClassEnum, BlogFilteredEnum, BlogSortEnum, DropDownInputs} from '../redux/actions'
import Cards from './Cards';
import DropDown from './DropDown';
import {Pagination} from 'antd';
import {RootStore} from '../index';

const someArray = [<Cards />, <Cards />, <Cards />, <Cards />, <Cards />]

const filterByArray:DropDownInputs[]= [
    {named:BlogFilteredEnum.AllCategories, classed:BlogClassEnum.Regular},
    { named: BlogFilteredEnum.HappeningNow, classed: BlogClassEnum.HappeningNow },
    { named: BlogFilteredEnum.FinancialLiteracy, classed: BlogClassEnum.FinancialLiteracy },
    { named: BlogFilteredEnum.Education, classed: BlogClassEnum.Education },
    {named:BlogFilteredEnum.Prosparity,classed:BlogClassEnum.Prosparity}
]
const sortByArray:DropDownInputs[] =[
    {named:BlogSortEnum.Recent, classed:BlogClassEnum.Regular},
    {named:BlogSortEnum.Trending, classed: BlogClassEnum.Regular}
]
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

    const filtered = useSelector((state:RootStore) => state.blogFiltered);
    const selected = useSelector((state:RootStore) => state.blogSorted);


    // const counter  = useSelector(state => state.counter)
    // const dispatch = useDispatch();

    // () => dispatchEvent({type:"Increment"})

    useEffect(() => {
        console.log(filtered)
    },[filtered])
    

    return(
        <div className="blog-post-grid">
            <div className="blog-post-grid-container">
                <div className="blog-post-grid-container__title-container">
                    <h1 className="blog-post-grid-container__title-container--title">All Posts</h1>

                    <DropDown intro="Filter by:" objArray={filterByArray} filterDropDown={true}/>
                    <DropDown intro="Sort by:" objArray={sortByArray} sortedDropDown={true} />

                </div>

                <div className="blog-post-grid-container__grid">
                    {someArray.map((item, index) => (<Cards/>))}
                </div>

                <div className="blog-post-grid-container__pagination">
                    <Pagination
                    simple
                    showSizeChanger
                    onShowSizeChange={setPageSize}
                    pageSize={pageSize}
                    total={someArray.length}
                    defaultCurrent={current}
                    onChange={setCurrent}
                />
                </div>

            </div>
        </div>
    )
}

export default BlogPostGrid