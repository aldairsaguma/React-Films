import React from 'react';
import { ElasticCarousel } from './carousel/ElasticCarousel';
import { Destacados } from './destacados/Destacados';

export const HomeScreen = () => {
    return (
        <>
            <ElasticCarousel />
            <Destacados />
        </>
    )
}
