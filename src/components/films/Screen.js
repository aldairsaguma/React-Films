import React, { useContext } from 'react';
import { userContext } from './userContext';
/** Components **/
import { AppRouter } from '../../routers/AppRouter';
import { CreateAccount } from '../login/CreateAccount';
/** Font Awesome **/
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser, faTimes, faPlay, faEye, faEyeSlash, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {faUser as faUserRegular} from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(faUser,faUserRegular,fab,faTimes,faPlay,faEye, faEyeSlash,faTimesCircle);

export const Screen = () => {
    /** Verificar si el dark mode esta activado **/
    const {userState} = useContext(userContext);
    const {darkMode, singIn} = userState;
    return (
        <>
            {
                singIn && (<CreateAccount />)
            }
            <div className={`wrapper${ darkMode ? ' dark-mode-enabled' : ' light-mode' }`} >
                <AppRouter />
            </div>
        </>
    )
}
