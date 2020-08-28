import React from 'react';

export default function LaptopPartTitle(props){
    return(
        <legend className="feature__name">
                <h3>{props.currentPart}</h3>
        </legend>
    )
}