import React,{ useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
interface Props{
    extended?:boolean
}

const SearchBar:React.FC<Props> = ({extended}) => {

    const [magClick, setMagClick] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);

    //handles clicking of magnification icon
    const handleMagClick = ():void => {

        if(inputRef && magClick){
            inputRef.current?.focus()
        }

        setMagClick(prevState => !prevState);
    }
    

    // const handleButtonClick = ():void =>{
    //     if(inputRef){
    //         inputRef.current.focus()
    //     }
    // }

    return(
        <div className="search-bar">

            
            <div className={extended?"search-bar-container__extended": "search-bar-container"}>

               {extended &&
                <div className="search-bar-container__extended-container">
                    <Link to="/">
                        <i className="fas fa-arrow-left search-bar-container__extended-container--icon"
                            onClick={() => handleMagClick()}
                            ></i>
                    
                        <p className="search-bar-container__extended-container--text">Back to All Posts</p>
                    </Link>
                </div>
            }
            <div className="search-bar-container__input-container">
                
                <i  
                className="fas fa-search search-bar-container__input-container--icon"
                onClick={() => handleMagClick()}
                ></i>

                <input ref={inputRef} className="search-bar-container__input-container--input" type="text" placeholder={'Try "passive income"'}/>
            
                </div>
            </div>
        </div>
    )
}

export default SearchBar