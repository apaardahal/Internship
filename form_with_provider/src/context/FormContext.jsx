import { createContext, useState} from "react";

 const FormContext = createContext()

export const FormProvider = ( {childern}) => {

    const [displayResult, setDisplayResult] = useState(false)
   
    const displayFormResult = () => {
        setDisplayResult(true)
    } 


     return <FormContext.Provider
        value={{ 
                 displayResult,
                 displayFormResult
        }}
     >
         {childern}
     </FormContext.Provider>
}

export default FormContext
