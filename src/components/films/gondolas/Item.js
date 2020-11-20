import React from 'react';
import PropTypes from 'prop-types'


export const Item = ({img}) => {
    return (
        <div className="content-img">
            <img src={`./assets/images/destacados/${img}.jpg`} loading="lazy" alt="dassad" />
        </div>
    )
}

Item.propTypes = {
    img : PropTypes.string.isRequired
}