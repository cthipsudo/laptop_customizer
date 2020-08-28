import React from 'react';
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
export default function AppCartItem(props) {
    return (
        <div>
            <div className="summary__option__label">{props.partName} </div>
            <div className="summary__option__value">{props.selectedOption.name}</div>
            <div className="summary__option__cost">
                {USCurrencyFormat.format(props.selectedOption.cost)}
            </div>
        </div>
    )
}