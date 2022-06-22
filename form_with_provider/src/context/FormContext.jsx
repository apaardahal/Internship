import React, { createContext, useState} from "react";

export const FormContext = createContext()

const FormProvider = ({children}) => {
    const[userData, setUserData] = useState();
    return (<FormContext.Provider
        value={{ 
                 userData, setUserData
        }}>
         {children}
     </FormContext.Provider>)
}

export  default FormProvider
