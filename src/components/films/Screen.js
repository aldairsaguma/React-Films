import React, { useContext } from 'react';
import { userContext } from './userContext';
/** Components **/
import { AppRouter } from '../../routers/AppRouter';
/** Font Awesome **/
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser, faTimes, faPlay} from '@fortawesome/free-solid-svg-icons';
import {faUser as faUserRegular} from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(faUser,faUserRegular,fab,faTimes,faPlay);

export const Screen = () => {
    /** Verificar si el dark mode esta activado **/
    const {darkMode} = useContext(userContext);
    return (
        <div className={`wrapper${ darkMode.darkMode ? ' dark-mode-enabled' : ' light-mode' }`} >
            <AppRouter />
        </div>
    )
}
