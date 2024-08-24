import React from 'react';
import PriceCard from './PriceCard';
import './styles.css';

function App() {
  // Define pricing plans data
  const plans = [
    {
      plan: 'Basic',
      price: '$9.99',
      features: [true, false, false, false, false], // Only the first feature is available
      buttonText: 'Choose Basic'
    },
    {
      plan: 'Standard',
      price: '$19.99',
      features: [true, true, false, false, false], // The first and second features are available
      buttonText: 'Choose Standard'
    },
    {
      plan: 'Premium',
      price: '$29.99',
      features: [true, true, true, true, true], // All features are available
      buttonText: 'Choose Premium'
    }
  ];

  return (
    <div className="app">
     
      <div className="price-card-container">
        {plans.map((plan, index) => (
          <PriceCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
