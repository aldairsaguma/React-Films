import React from 'react';
import PropTypes from 'prop-types'
/** Font Awesome **/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ButtonDropDown = ({handleDropdown}) => {
    return (
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
    )
};

ButtonDropDown.propTypes = {
    handleDropdown : PropTypes.func.isRequired
}

export default React.memo(ButtonDropDown);