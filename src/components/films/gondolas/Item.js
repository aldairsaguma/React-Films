import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export const Item = (
        {uid,title,duration,description,trailer,inView}
        ) => {
    const images = useRef(null);
    const onErrorImage = `./assets/images/destacados/default.jpg`;

    // const test = document.querySelector('.gondolas__section-gondolas');
    // const callbackFunction = (entries) => {
    //     console.log(entries[0]);
    // }
    // const observer = new IntersectionObserver(callbackFunction);
    // observer.observe(test);
                                        
    return (
        <div className={ `${(inView)? 'info-top ' : 'info-bottom '} content-img` }>
                <div className="info-box">
                    <div className="info-movie">
                        sadasassdssdaasd
                    </div>
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
    trailer : PropTypes.string.isRequired
}