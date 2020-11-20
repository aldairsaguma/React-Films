import React from 'react';
import { ElasticCarousel } from './carousel/ElasticCarousel';
import { Gondolas } from './gondolas/Gondolas';

export const HomeScreen = () => {
    return (
        <>
            <ElasticCarousel />
            <Gondolas title='Películas destacadas' />
            <Gondolas title='Películas Recientes' />
        </>
    )
}
