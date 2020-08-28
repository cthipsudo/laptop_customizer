import React from 'react';
import LaptopPartTitle from './LaptopPartTitle/LaptopPartTitle'
import LaptopPartOptions from './LaptopPartOptions/LaptopPartOptions';
export default function LaptopPart(props) {
    //console.log(props.features);
    const options = props.features[props.currentPart].map((item, idx) => {
        return <LaptopPartOptions
            key = {idx}
            currentPart={props.currentPart}
            currentProduct={item}
            selectedFeature={props.selectedFeature}
            handleFeatureUpdate={props.handleFeatureUpdate}
        />
    });

    return (
        <fieldset className="feature">
            <LaptopPartTitle currentPart={props.currentPart}/>
            {options}
        </fieldset>
    );
}