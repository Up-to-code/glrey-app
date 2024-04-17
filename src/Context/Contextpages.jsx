/* eslint-disable react/prop-types */
import { createContext, useState } from "react";




/// setp 1
export const PageNaumber = createContext(1)


///step 2 

export default function Contextpages({ children }) {
    const [Naumber ,setNaumber] = useState(1)
    return (
        <PageNaumber.Provider value={{Naumber ,setNaumber}}>
            {children}
        </PageNaumber.Provider>
    )
}






