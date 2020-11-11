import React from 'react'
import YouTube from 'react-youtube';

/** Styles **/
import './scss/__trailer.scss';


export const Trailer = () => {

    const opts = {
        height: '671',
        width: '1196',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    return (
        /** 
            Autoplay
            rel=0&amp;autoplay=1  
        **/ 
        <div className="trailer__container">
            <div className="trailer-center">
                <YouTube 
                    videoId="Qxfqpe3IG7o" 
                    opts={opts} 
                    // onReady={ e => e.target.mute()} 
                    />;
            </div>
        </div>
    )
}