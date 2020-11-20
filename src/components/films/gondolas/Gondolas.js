import React from 'react';
import Carousel,{consts} from 'react-elastic-carousel'
import { Item } from './Item';
import PropTypes from 'prop-types'

import chevron_left_solid from './images/chevron-left-solid.svg';
import chevron_right_solid from './images/chevron-right-solid.svg';

/** Styles **/
import './scss/styles.scss';

const imgList = ['uid1','uid2','uid3','uid4','uid5','uid6','uid7','uid8','uid9','uid10','uid11','uid12'];
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


export const Gondolas = ({title}) => {
    return (
        
        <div className="gondolas__section-gondolas">
            <div className="gondolas__container-gondolas">
               <div className="box">
                   <div className="title">
                        <span> { title } </span>
                   </div>
                   <div>
                       <Carousel
                        breakPoints={breakPoints}
                        itemsToShow={6}
                        pagination={false}
                        renderArrow={myArrow}
                       >
                            {
                                imgList.map( (img, i) => (
                                    <Item  img={img} key={i+1} />
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
   title : PropTypes.string.isRequired
}
