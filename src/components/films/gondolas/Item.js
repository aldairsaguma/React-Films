import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { ShortInfo } from './ShortInfo';


export const Item = ({uid,title,duration,description,trailer,inView,handleTrailer}) => {

    const images = useRef(null);
    const onErrorImage = `./assets/images/destacados/default.jpg`;
    /** Enable Popup **/

    return (
        <div className={ `${(inView)? 'info-top ' : 'info-bottom '} content-img` }>
                <div className="info-box">

                    <ShortInfo 
                        duration={duration}  
                        description={description}
                        trailer={trailer}
                        handleTrailer={handleTrailer}
                        /> 
                    <Link to="/premiere">
                        <img 
                            src={`./assets/images/destacados/${uid}.jpg`} 
                            alt={title} 
                            onError={
                                () => {
                                    images.current.src = onErrorImage;
                                }
                            }
                            ref={images}
                            />
                    </Link>
                </div>
                <div className="title-movie">
                    {title}
                </div>
        </div>
    )
}


// Item.defaultProps = {
//     onErrorImage: defaultErrorImage,
// };

Item.propTypes = {
    uid : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    duration : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    trailer : PropTypes.string.isRequired,
    handleTrailer : PropTypes.func.isRequired
}