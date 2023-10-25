import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export function MyProvider ({children}) {
    const [nameHouse, setNameHouse] = useState()

    useEffect(() => {
        const nameLocal =  localStorage.getItem('namehouse') ?? null; 
        setNameHouse(nameLocal)
    },[])

    return(
        <MyContext.Provider value={{nameHouse, setNameHouse}}>
            {children}
       </MyContext.Provider>
    )
}