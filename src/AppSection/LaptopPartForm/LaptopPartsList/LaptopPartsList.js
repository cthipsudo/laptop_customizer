import React from 'react';
import LaptopPart from './LaptopPart/LaptopPart'


export default function LaptopPartsList(props){
    const laptopParts = Object.keys(props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
        //Make each part here
      return <LaptopPart 
      currentPart={feature} 
      index={idx} 
      features={props.features}
      selectedFeature={props.selectedFeature} 
      handleFeatureUpdate={props.handleFeatureUpdate} 
      key={featureHash}/>
        
    });
    return(
        <section>
            {laptopParts}
        </section>
    )
}