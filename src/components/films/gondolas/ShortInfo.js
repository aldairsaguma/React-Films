import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ShortInfo = ({duration, description, trailer,handleTrailer}) => {

   

    /**  Truncate string **/
    let shortText;
    const truncateString = (description, num ) => {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (description.length <= num ) return description;  
        return shortText = description.slice(0, num) + '...';

    }
    truncateString(description, 120);

    return (
        <div className="info-movie">
            <div className="description">
                <i> { `${duration} - ` } </i>
                <span>{shortText}</span>
            </div>
            <div className="see">
                <div>
                    <button className="see-movie">
                        <FontAwesomeIcon icon="play" />
                        { ` Película` }
                    </button>
                </div>
                <div>
                    <button className="see-trailer" onClick={
                        () => handleTrailer(trailer)
                    }>
                        <FontAwesomeIcon icon={['fab','youtube']} />
                        { ` Trailer` }
                    </button>
                </div>
            </div>
        </div>
    )
}


ShortInfo.propTypes = {
    duration : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    trailer : PropTypes.string.isRequired,
    handleTrailer : PropTypes.func.isRequired
}