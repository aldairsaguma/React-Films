import React from 'react';
import Carousel,{consts} from 'react-elastic-carousel';
import { Item } from './Item';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
/** Data de prueba **/
import { destacados } from './data';
/** Images **/
import chevron_left_solid from './images/chevron-left-solid.svg';
import chevron_right_solid from './images/chevron-right-solid.svg';
/** Styles **/
import './scss/styles.scss';
import { Link } from 'react-router-dom';





//Array random
// const imgListRandom = [];
// for (let index = 0; index < 1; index++) {
//     imgListRandom[index] = imgList.slice().sort(() => Math.random() - 0.5)
// }
// console.log(imgListRandom[0]);

const breakPoints = [
    { width : 1 , itemsToShow : 1 },
    { width : 550 , itemsToShow : 2 },
    { width : 768 , itemsToShow : 3 },
    { width : 992 , itemsToShow : 4 },
    { width : 1200 , itemsToShow : 6 }
]

const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img src={chevron_left_solid} /> : <img src={chevron_right_solid} /> ;
    return (
      <button onClick={onClick} disabled={isEdge}>
        <span>{pointer}</span>
      </button>
    )
}

export const Gondolas = ({title, type}) => {

    const [ ref, inView] = useInView({
        threshold : 1
    });
    
    return (
        <div 
            className="gondolas__section-gondolas"
            ref={ref}
            >
            <div className="gondolas__container-gondolas">
               <div className="box">
                    <div className="see-more">
                        <div className="title">
                                <span> { title } </span>
                        </div>
                        <div className="see-more-click">
                            <div className="text-left">
                                <Link to="/">
                                    Ver más
                                </Link>
                            </div>
                        </div>
                    </div>

                   <div>
                       <Carousel
                        breakPoints={breakPoints}
                        itemsToShow={6}
                        pagination={false}
                        renderArrow={myArrow}
                       >
                            {
                                destacados.map( (data, i) => (
                                    <Item  
                                        {...data} 
                                        inView={inView} 
                                        key={i+1} 
                                    />
                                ))
                            }
                       </Carousel>
                   </div>
               </div>
            </div>
        </div>
    )
};

Gondolas.propTypes = {
   title : PropTypes.string.isRequired,
   type : PropTypes.number.isRequired
}