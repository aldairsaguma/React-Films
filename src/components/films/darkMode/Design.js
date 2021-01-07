import React from 'react'
import PropTypes from 'prop-types';

export const Design = ({handleDarkMode,themeSelected}) => {
    
    return (
        <div className={`dark-mode${themeSelected ? ' dark-mode-active' : ''}`} onClick={handleDarkMode}>
            <div className="icon-mode-moon">
                <span></span>
            </div>
            <div className="icon-mode-sun">
                <span></span>
            </div>
            <div className="icon-mode-thumb" />
        </div>
    )
};

Design.propTypes = {
    handleDarkMode : PropTypes.func.isRequired
}