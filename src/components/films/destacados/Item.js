import React from 'react'

export const Item = ({img}) => {
    return (
        <div>
            <img src={`./assets/images/destacados/${img}.jpg`} loading="lazy" alt="dassad" />
        </div>
    )
}
