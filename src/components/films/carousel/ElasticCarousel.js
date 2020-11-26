import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { Item } from './Item';
import { Trailer } from '../trailer/Trailer';
/** Styles **/
import './scss/styles.scss';


// const breakPoints = [
//     { width : 1 , itemsToShow : 1 },
//     { width : 550, itemsToShow : 1 },
//     { width : 768, itemsToShow : 1 },
//     { width : 1200, itemsToShow : 1 }
// ];

const imgList = ['uid1','uid2','uid3','uid4','uid5','uid6','uid7','uid8','uid9'];

export const ElasticCarousel = () => {

    const [trailer, setTrailer] = useState({
        popupState : false,
        idYoutube : ''
    });
    
    const { popupState,idYoutube } = trailer;

    const handleTrailer = (idyoutube) => {
        setTrailer({
            popupState : !popupState,
            idYoutube : idyoutube
        });
    }

    const handleClosePopup = () => {
        setTrailer({
            popupState : !trailer,
            idYoutube : ''
        });
    }

    return (
        <>
            {
                popupState && <Trailer handleClosePopup={handleClosePopup} idYoutube={idYoutube} />
            }
            <div className="carousel_component">
                <div className="carousel_component-sub">
                    <Carousel  
                        // breakPoints={breakPoints} 
                        autoPlaySpeed={5000}
                        easing="cubic-bezier(1,.15,.55,1.54)"
                        // enableAutoPlay
                        focusOnSelect={true}
                        itemsToShow={1}
                        showArrows={false}
                        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                        transitionMs={700}
                        >
                        {
                            imgList.map( (img,i) => (
                                <Item img={img} key={i+1} handleTrailer={handleTrailer} />
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}
