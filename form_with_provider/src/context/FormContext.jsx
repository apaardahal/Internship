import React, { createContext, useState} from "react";

 export const FormContext = createContext('')

 const FormProvider = ( {childern}) => {

    const[userData, setUserData] = useState()

     return <FormContext.Provider
        value={{ 
                 userData, setUserData
        }}
     >
         {childern}
     </FormContext.Provider>
}

export  default FormProvider
