import React,{useState, useContext} from 'react';
// import {TagContainerContext} from'./context/TagContainerContext';
enum Heading {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    
}

type Title = "h1" | "h2" | "h3" | "h4" | "h5"| "h6";

interface Props{
    title:string;
    heading:Title;
    addedClass?:string;
    toggle?:boolean;
}

const TitleContainer:React.FC<Props> = ({heading, title, addedClass, toggle}) => {

//   const {clicked, setClicked} = useContext(TagContainerContext)

    return(
        <div className={addedClass?`title-container ${addedClass}`: "title-container"}>
        
            {(heading ===Heading.h1)&& <h1 className="title-container__h1">{title}</h1>}
            {(heading ==="h2")&& <h2 className="title-container__h2">{title}</h2>}
            {(heading ==="h3")&& <h3 className="title-container__h3">{title}</h3>}
            {(heading ==="h4")&& <h4 className="title-container__h4">{title}</h4>}
            {(heading ==="h5")&& <h5 className="title-container__h5">{title}</h5>}
            {(heading ==="h6")&& <h6 className="title-container__h6">{title}</h6>}
        
            {/* {toggle&&<p onClick={() => setClicked(prevState => !prevState)} className="title-container__toggle">Select</p>} */}
        </div>
    )
}

export default TitleContainer