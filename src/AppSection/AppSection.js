import React from 'react';
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default function AppSection(props){
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === props.selectedFeature.selected[feature].name}
                onChange={e => props.handleFeatureUpdate(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });
  
      const summary = Object.keys(props.selectedFeature.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selectedFeature.selected[feature];
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      });
  
      const total = Object.keys(props.selectedFeature.selected).reduce(
        (acc, curr) => acc + props.selectedFeature.selected[curr].cost,
        0
      );

    return(
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section>
        </main>
    )
}