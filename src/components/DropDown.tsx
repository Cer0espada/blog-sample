import React,{useState, useRef, useEffect} from 'react';
import {BlogFilteredActionTypes, BlogSortActionTypes, DropDownInputs} from '../redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import {RootStore} from '../index';
import { blogFilteredReducer } from '../redux/reducers/BlogFilteredReducer';


interface Props{
    intro:string
    objArray:DropDownInputs[],
    filterDropDown?:boolean,
    sortedDropDown?:boolean
}

const DropDown:React.FC<Props> = ({intro, objArray, filterDropDown, sortedDropDown}) => {
    const [clicked, setClicked] = useState(false);

    const dropdownRef = useRef<HTMLElement>(null);

    const dispatch = useDispatch();

    const filtered:DropDownInputs = useSelector((state:RootStore) => state.blogFiltered);
    const sorted:DropDownInputs = useSelector((state:RootStore) => state.blogSorted);


    const handleDropDownClick =() => setClicked(prevState => !prevState); 
    const handleItemClick = (dropdownInput:DropDownInputs):void => {
   
        dispatch({ type: dropdownInput.named })
        setClicked(false)
    }

    

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */

        const handleClickOutside = (event:MouseEvent) =>{
            if (dropdownRef && event) {

                const {current} = dropdownRef
                const {target}:EventTarget|any = event

                if(current && !current.contains(target)){
                    setClicked(false);
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return(
    <div className="dropdown">
        <nav ref={dropdownRef}className="dropdown-container">
            <div className="dropdown-container__heading-container">
                <p className="dropdown-container__heading-container--beggining">{intro}</p>
                <p onClick={handleDropDownClick}
                className={`dropdown-container__heading-container--heading ${filterDropDown? filtered.classed:''} ${sortedDropDown?sorted.classed:''}`}>{`${filterDropDown?filtered.named:''} ${sortedDropDown?sorted.named:''}`}</p>

                <i className={clicked ? 
                    "fas fa-chevron-up dropdown-container__heading-container--icon down" :
                    "fas fa-chevron-up dropdown-container__heading-container--icon up" }></i>
            </div>

            <nav className={clicked?"dropdown-container__item-container": "dropdown-container__item-container none"}>
                { clicked&&objArray.map((item,index) => 
                <p key={index} 
                onClick={()=> handleItemClick(item)}
                className={`dropdown-container__item-container--item ${item.classed}`}
                >{item.named}</p>
                )}
            </nav>
            
        </nav>
    </div>)
}

export default DropDown