import React from 'react'
import PropTypes from 'prop-types';

export const Design = ({handleDarkMode,themeSelected}) => {
    return (
        <div className={`${themeSelected ? 'dark-mode-active ' : ''}dark-mode`} onClick={handleDarkMode}>
            <div className="icon-mode-moon">
                <span />
            </div>
            <div className="icon-mode-sun">
                <span />
            </div>
            <div className="icon-mode-thumb" />
        </div>
    )
};

Design.propTypes = {
    handleDarkMode : PropTypes.func.isRequired
    // themeSelected : PropTypes.string.isRequired
}