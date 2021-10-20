import { createContext, useState, useContext, FC } from "react";

interface IPopUpContext{
    isOpen:boolean;
    handleClick?:() => void;
}
const defaultState = {
    isOpen:false,
}
const PopUpContext = createContext<IPopUpContext>(defaultState);//defaultState

export const PopUpProvider:FC = ({children})=>{
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen);
      };

    const values={
        isOpen,
        handleClick
    }


    return <PopUpContext.Provider value={values}>{children}</PopUpContext.Provider>
};

export const usePopUp = () => useContext(PopUpContext);
