import React from 'react';
import AppCartTitle from './AppCartTitle/AppCartTitle';
import AppCartItem from './AppCartItem/AppCartItem';
import AppCartTotal from './AppCartTotal/AppCartTotal'

export default function AppCart(props){
    const summary = Object.keys(props.selectedFeature.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selectedFeature.selected[feature];
        return (
            <AppCartItem 
                className="summary__option"
                key = {featureHash}
                partName = {feature}
                selectedOption = {selectedOption}
            />
        );
    });
    return(
        <section className="main__summary">
            <AppCartTitle />
            {summary}
            <AppCartTotal selectedFeature={props.selectedFeature}/>
          </section>
    )
}