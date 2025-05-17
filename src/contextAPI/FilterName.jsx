import React, { useEffect, useState } from 'react'
import { createContext } from "react";

export let OurContext = createContext();

const FilterName = ({ children }) => {
    const [filterName, setFilter] = useState('');
    const [login, setLogin] = useState(() => {
        const saveLogin = localStorage.getItem('loginStatus');
        return saveLogin === 'true' ? true : false
    });
    useEffect(() => {
        localStorage.setItem('loginStatus', login);
    }, [login]);
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
