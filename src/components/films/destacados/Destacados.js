import React from 'react';
import Carousel from 'react-elastic-carousel'
import { Item } from './Item';

/** Styles **/
import './scss/styles.scss';

const imgList = ['uid1','uid2','uid3','uid4','uid5','uid6','uid7','uid8','uid9','uid10','uid11','uid12'];
const breakPoints = [
    { width : 1 , itemsToShow : 1 },
    { width : 550 , itemsToShow : 2 },
    { width : 768 , itemsToShow : 3 },
    { width : 992 , itemsToShow : 4 },
    { width : 1200 , itemsToShow : 5 }
]


export const Destacados = () => {
    return (
        <div className="desctacados__section-destacados">
            <div className="desctacados__container-destacados">
               <div className="box">
                   <div className="title">
                      <span> Películas destacadas </span>
                   </div>
                   <div>
                       <Carousel
                        breakPoints={breakPoints}
                        itemsToShow={6}
                        pagination={false}
                        itemPadding={[10,15]}
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
}
