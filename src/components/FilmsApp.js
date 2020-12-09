import React, { useState } from 'react';

/** Components **/
import { Screen } from './films/Screen';
import { userContext } from './films/userContext';

export const FilmsApp = () => {
    
    /**  Estado dark mode **/
    const [darkMode, setDarkMode] = useState({
        darkMode : false
    });
    

    return (
        <userContext.Provider value={{darkMode, setDarkMode}}>
            <Screen />
        </userContext.Provider>
    )
}
