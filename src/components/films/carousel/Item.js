import React from 'react'

/** Styles **/
import './scss/__carousel.scss';

/** Data **/
import { data } from './data';

export const Item = ({img, handleTrailer}) => {
    // console.log(handleTrailer);
    return (
        <div className="carousel__images-body">

            {
                data.map( res => (
                    (res.uid === img ) && (
                        <div className="carousel__images-body-sub" key={img}>
                            <div className="xrjs">
                                <div className="coverPage" style={{ backgroundImage : `url(./assets/images/carousel/portadas/${img}.jpg)` }}>
                                </div>
                                <div className="nsqp">
                                    <div 
                                        className="presentation"
                                        // style={{ background : 'url(/assets/images/carousel/presentacion/' + `${img}` + '.jpg) no-repeat' }}
                                        >
                                            <img src={`./assets/images/carousel/presentacion/${img}.jpg`} loading="lazy" alt={res.title} />
                                    </div>
                                    <div className="text-bottom">
                                        <div>   
                                            <div className="title">{`${res.title}`}</div>
                                            <div>
                                                <i>{`${res.duration} - `}</i>
                                                <span>{`${res.description}`}</span>
                                            </div>
                                            <div className="watch-movie-or-trailer">
                                                <div>Película</div>
                                                <div>
                                                    <button 
                                                        className="watch-trailer"
                                                        onClick={handleTrailer}
                                                        >
                                                        Trailer
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