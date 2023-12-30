import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const plans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '$4/month/user',
    features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: '$8/month/user',
    features: [
      'Up to 50 graphs',
      'Up to 1000 chatbot queries',
      'Email + live chat support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    price: 'Contact for price',
    features: [
      'Unlimited graphs',
      'Ability to upload custom PDFs',
      '24/7 phone + email support',
    ],
  },
];

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <NavBar />

      <div className="container mx-auto p-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 border rounded-lg ${
                selectedPlan === plan.id
                  ? 'border-blue-500 transform scale-105 hover:shadow-lg'
                  : 'border-gray-700 hover:shadow-md'
              } transition duration-300 ease-in-out`}
            >
              <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
              <p className="text-2xl font-semibold mt-2">{plan.price}</p>
              <ul className="mt-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-white-300 mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPlan(plan.id)}
                className={`mt-6 text-white px-6 py-3 rounded-full ${
                  selectedPlan === plan.id
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-700 hover:bg-gray-800'
                } transition duration-300 ease-in-out`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Select'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
