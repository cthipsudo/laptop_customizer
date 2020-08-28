import React from 'react';
import LaptopPartForm from './LaptopPartForm/LaptopPartForm';
import AppCart from './AppCart/AppCart';

export default function AppSection(props) {
    return (
        <main>
            <LaptopPartForm selectedFeature={props.selectedFeature} handleFeatureUpdate={props.handleFeatureUpdate} />
            <AppCart selectedFeature={props.selectedFeature}/>
        </main>
    )
}