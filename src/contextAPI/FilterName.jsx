import React, { useState } from 'react'
import { createContext } from "react";





export let OurContext =createContext();

const FilterName = ({children}) => {
    const [filterName,setFilter]=useState('');
    const [login,setLogin]=useState(false);
    return (
        <OurContext.Provider value={{
            filterName,
            setFilter,
            login,
            setLogin
        }}>
            {children}
        </OurContext.Provider>
    )
}

export default FilterName
