import React, { useEffect, useState } from 'react'
import { Login } from '../auth/Login';

/** Font Awesome **/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/** react-outside-click-handler **/
import OutsideClickHandler from 'react-outside-click-handler';
import { Account } from '../auth/Account';

const Dropdown = () => {

    const [{active}, setLogin] = useState({
        active: false
    });
    
    useEffect(() => {
        if(active){
            document.querySelector('.auth__dropdown-box').classList.add('auth__dropdown-box-active');
        }else{
            document.querySelector('.auth__dropdown-box').classList.remove('auth__dropdown-box-active');
        }
    }, [active]);


    const handleDropdown = () => {

        setLogin({
            active: !active
        });
        
    }
    
    return (
        <li className="dropdown__user-dropdown">
            {/* OutsideClickHandler -> actua cómo un div */}
            <OutsideClickHandler 
                onOutsideClick={ () => {
                    setLogin({
                        active: false
                    });
                }} 
                disabled={!active}
            >
                <button
                    id="btn-login" 
                    className="btn-login"
                    onClick={handleDropdown}
                    >
                    <FontAwesomeIcon icon="user"/>
                    { ' ' }
                    <span className="icon-login">
                        {`Login`}
                        {/* {`Perfil`} */}
                    </span>
                </button>
                <div className="auth__dropdown-box">
                    {
                        active && <Login /> 
                        // active && <Account />
                    }         
                </div>
            </OutsideClickHandler>
        </li>
    )
};

export default React.memo(Dropdown);