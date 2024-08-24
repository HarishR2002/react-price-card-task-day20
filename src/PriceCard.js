import React from 'react';

function PriceCard({ plan, price, features, buttonText }) {
  // Define the feature names for display
  const featureNames = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'];

  return (
    <div className="price-card">
      <h2>{plan}</h2>
      <p className="price">{price}</p>
      <ul className="features">
        {features.map((isFeatureAvailable, index) => (
          <li key={index}>
            {isFeatureAvailable ? '✔️' : '✖️'} {featureNames[index]}
          </li>
        ))}
      </ul>
      <button className="choose-button">{buttonText}</button>
    </div>
  );
}

export default PriceCard;
