import React from 'react'
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';


/** Styles **/
import './scss/__trailer.scss';


export const Trailer = ({handleClosePopup}) => {

    const opts = {
        height: '671',
        width: '1196',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    return (
        <div className="trailer__container">
            <div className="trailer-center">
                <div className="close-popup" onClick={handleClosePopup}>
                    <FontAwesomeIcon icon="times" title="Close" />
                </div>
                <YouTube 
                    videoId="Qxfqpe3IG7o" 
                    opts={opts} 
                    onReady={ e => e.target.mute()} 
                    />;
            </div>
        </div>
    )
}

Trailer.propTypes = {
    handleClosePopup : PropTypes.func.isRequired
}