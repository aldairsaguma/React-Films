import React from 'react';

/** Components **/
import { AppRouter } from '../../routers/AppRouter';

/** Font Awesome **/
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUser, faTimes, faPlay} from '@fortawesome/free-solid-svg-icons';
import {faUser as faUserRegular} from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(faUser,faUserRegular,fab,faTimes,faPlay);

export const FilmsApp = () => {
    return (
        <div className="wrapper">
            <AppRouter />
        </div>
    )
}
