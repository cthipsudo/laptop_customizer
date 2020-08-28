import React from 'react';
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function AppCartTotal(props) {
    const total = Object.keys(props.selectedFeature.selected).reduce(
        (acc, curr) => acc + props.selectedFeature.selected[curr].cost,
        0
    );
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
            </div>
        </div>
    )
}