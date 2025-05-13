import React, { useState } from 'react'
import { createContext } from "react";





export let OurContext =createContext();

const FilterName = ({children}) => {
    const [filterName,setFilter]=useState('');
    return (
        <OurContext.Provider value={{
            filterName,
            setFilter
        }}>
            {children}
        </OurContext.Provider>
    )
}

export default FilterName
