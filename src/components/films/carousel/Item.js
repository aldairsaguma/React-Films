import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** Data **/
import { data } from './data';


export const Item = ({img, handleTrailer}) => {
    return (
        <div className="carousel__images-body">

            {
                data.map( res => (
                    (res.uid === img ) && (
                        <div className="carousel__images-body-sub" key={img}>
                            <div className="xrjs">
                                <div className="coverPage" style={{ backgroundImage : `url(${process.env.PUBLIC_URL}/assets/images/carousel/portadas/${img}.jpg)` }}>
                                </div>
                                <div className="nsqp">
                                    <div 
                                        className="presentation"
                                        >
                                            <img 
                                                src={`${process.env.PUBLIC_URL}/assets/images/carousel/presentacion/${img}.jpg`} loading="lazy" 
                                                // alt={res.title} 
                                            />
                                    </div>
                                    <div className="text-bottom">
                                        <div>   
                                            <div className="title">{`${res.title}`}</div>
                                            <div className="description-movie">
                                                <i>{`${res.duration} - `}</i>
                                                <span>{`${res.description}`}</span>
                                            </div>
                                            <div className="watch-movie-or-trailer">
                                                <div>
                                                    <button
                                                        className="watch-movie"
                                                    >
                                                        <FontAwesomeIcon icon="play" />
                                                        {` VER PELÍCULA`}
                                                    </button>
                                                </div>
                                                <div>
                                                    <button 
                                                        className="watch-trailer"
                                                        onClick={
                                                            () => handleTrailer(res.trailer)
                                                        }
                                                        >
                                                        <FontAwesomeIcon icon={['fab','youtube']} />
                                                        {` TRAILER`}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    )
                ))
            }
        </div>
    )
}

Item.propTypes = {
    img : PropTypes.string.isRequired,
    handleTrailer : PropTypes.func.isRequired
}