import React from 'react';
import slugify from 'slugify';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function LaptopPartOptions(props) {
    const itemHash = slugify(JSON.stringify(props.currentProduct));
    return (
        <div key={itemHash} className="feature__item">
            <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(props.currentPart)}
                checked={props.currentProduct.name === props.selectedFeature.selected[props.currentPart].name}
                onChange={e => props.handleFeatureUpdate(props.currentPart, props.currentProduct)}
            />
            <label htmlFor={itemHash} className="feature__label">
                {props.currentProduct.name} ({USCurrencyFormat.format(props.currentProduct.cost)})
              </label>
        </div>
    );
}