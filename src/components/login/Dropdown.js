import React, { useCallback, useEffect, useState } from 'react'
import { Login } from './Login';
// import { Account } from './Account';
import ButtonDropDown  from './ButtonDropDown';

/** react-outside-click-handler **/
import OutsideClickHandler from 'react-outside-click-handler';

const Dropdown = () => {

    const [dropDown, setDropDown] = useState(false);
    
    useEffect(() => {
        if(dropDown){
            document.querySelector('.auth__dropdown-box').classList.add('auth__dropdown-box-active');
        }else{
            document.querySelector('.auth__dropdown-box').classList.remove('auth__dropdown-box-active');
        }
    }, [dropDown]);


    const handleDropdown = useCallback(() => {

        setDropDown(active => !active);
        
    },[setDropDown]);

    return (
        <li className="dropdown__user-dropdown">
            {/* OutsideClickHandler -> actua cómo un div */}
            <OutsideClickHandler 
                onOutsideClick={ () => {
                    setDropDown(false);
                }} 
                disabled={!dropDown}
            >
                <ButtonDropDown handleDropdown={handleDropdown} />
                <div className="auth__dropdown-box">
                    {
                        dropDown && <Login /> 
                        // dropDown && <Account />
                    }         
                </div>
            </OutsideClickHandler>
        </li>
    )
};

export default Dropdown;