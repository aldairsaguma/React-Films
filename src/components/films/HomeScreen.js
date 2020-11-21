import React from 'react';
import { ElasticCarousel } from './carousel/ElasticCarousel';
import { Gondolas } from './gondolas/Gondolas';

export const HomeScreen = () => {
    return (
        <>
            <ElasticCarousel />
            <Gondolas title='Películas destacadas' type={1} />
            <Gondolas title='Películas Recientes' type={2} />
        </>
    )
}
