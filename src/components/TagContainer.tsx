import React,{useState, useContext} from 'react';
import TitleContainer from './TitleContainer';
// import TagContainerContextProvider,{TagContainerContext} from './context/TagContainerContext';
import Cards from './Cards';

const TagContainer = () => {

    const [x,setX] = useState(0);
//    const {clicked, setClicked} = useContext(TagContainerContext)

    const someArray = [<Cards />,
         <Cards />, 
         <Cards />,
         <Cards />, 
         <Cards />]
    // subtracting from the length to determine how many blogMod widths to move , and how many we want to display at a time
    const goLeft = () => (x === 0 ? setX(-275 * (someArray.length - 2)) : setX(x + 275));

    //someArray.length was used so the input can be dynamic
    const goRight = () => (x === -275 * (someArray.length - 3)) ? setX(0) : setX(x - 275);


    return(
        // <TagContainerContextProvider>
        <div className="blog-tag-container">
            <TitleContainer title="#tag container" heading="h6" addedClass={"blog-tag-container__heading"}/> 
            <div className="blog-tag-container__wrapper">
                

                <i className="blog-tag-container__left-chevron fas fa-chevron-left"
                onClick={goLeft}></i>
                    <div className="blog-tag-container__card-carousel"
                    style={{transform: `translateX(${x}px)`}}>
                        {someArray.map((item, index) => (<Cards key={index}/>))}
                    </div>
                <i className="blog-tag-container__right-chevron fas fa-chevron-right"
                onClick={goRight}></i>

            </div>

            <hr className="hr"/>
        </div>
        // </TagContainerContextProvider>
    )
}

export default TagContainer;
