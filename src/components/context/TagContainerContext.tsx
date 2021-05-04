import React,{useState, createContext, Context} from 'react';
export const TagContainerContext = createContext({});

interface ContextProps{
    click?:boolean;
}


const TagContainerContextProvider:React.FC<ContextProps> = ({ children } ) => {

    const [clicked, setClicked] = useState(true)
    
    const DropDownContainer = {

        clickedState: [clicked, setClicked]
  
    }

    return <TagContainerContext.Provider value={DropDownContainer}>{children}</TagContainerContext.Provider>
}

export default TagContainerContextProvider