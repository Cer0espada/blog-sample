import React,{useState, useRef, createRef} from 'react';

const SearchBar:React.FC = () => {
    const inputRef = createRef<HTMLInputElement>();

    // const handleButtonClick = ():void =>{
    //     if(inputRef){
    //         inputRef.current.focus()
    //     }
    // }

    return(
        <div className="search-bar">
            <div className="search-bar-container">
                <i  
                className="fas fa-search search-bar-container__icon"
                
                ></i>

                <input ref={inputRef} className="search-bar-container__input" type="text" placeholder={'Try "passive income"'}/>
            </div>
        </div>
    )
}

export default SearchBar