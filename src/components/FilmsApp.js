import React, { useState } from 'react';

/** Components **/
import { Screen } from './films/Screen';
import { userContext } from './films/userContext';

export const FilmsApp = () => {
    
    /**  Estado dark mode **/
    const [userState, setUserState] = useState({
        darkMode : false,
        singIn: false
    });


    return (
        <userContext.Provider value={{userState, setUserState}}>
            <Screen />
        </userContext.Provider>
    )
}
