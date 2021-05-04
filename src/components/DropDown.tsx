import React,{useState} from 'react';

interface  DropDownInputs{
    name:string;
    classed:string;
}

interface Props{
    title:string
    objArray:DropDownInputs[]
}

const DropDown:React.FC<Props> = ({title, objArray}) => {
    const [clicked, setClicked] = useState(false);

    const handleDropDownClick =() => setClicked(prevState => !prevState); 
    return(
    <div className="dropdown">
        <nav className="dropdown-container">
            <div className="dropdown-contianer__heading-container">
                <h2 onClick={handleDropDownClick}
                className="dropdown-container__heading-container--heading">{title}</h2>
                
                    <i className={clicked ? 
                        "fas fa-chevron-up dropdown-container__heading-container--icon down" :
                        "fas fa-chevron-up dropdown-container__heading-container--icon up" }></i>
            </div>

            <nav className="dropdown-container__item-container">
                { objArray?.map((item,index) => 
                <p key={index} className={`dropdown-container__item-container--item ${item.classed}`}>{item.name}</p>
                )}
            </nav>
            
        </nav>
    </div>)
}

export default DropDown