import React,{useState} from 'react';
import {useDispatch} from 'react-redux'; 

interface Props{
    addedClass?:string,
    name?:string,
}

const SlateToolBarIcon:React.FC<Props> = ({addedClass, name}) => {

    const [clicked, setClicked] = useState<boolean>(false);
    const dispatch = useDispatch();
    const handleClicked = () => {
        setClicked(prevState => !prevState)

        if(clicked){
            dispatch({type:`${name}`})
        }else{
            dispatch({type:`${name}Off`})
        }
        
    }


    return(
        <div className="slate-tool-bar-icon">
            <i onClick={() => handleClicked()} className={addedClass ? `slate-tool-bar-icon__icon ${addedClass}` : "slate-tool-bar-icon__icon"}></i>
        </div>
    )
}

export default SlateToolBarIcon;