import React from 'react';
import LaptopFromTitle from './LaptopFormTitle/LaptopFormTitle';
import LaptopPartsList from './LaptopPartsList/LaptopPartsList';
import AppStore from '../../AppStore/AppStore'
export default function LaptopPartForm(props) {
    return (
        <form className="main__form">
            <LaptopFromTitle/>
            <LaptopPartsList features={AppStore} selectedFeature={props.selectedFeature} handleFeatureUpdate={props.handleFeatureUpdate}/>
        </form>
    )
}