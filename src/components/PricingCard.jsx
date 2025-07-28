
import React from 'react';

export default function PricingCard({ plan, price, features, popular }) {
  return (
    <div className={`p-8 rounded-lg shadow-md border ${popular ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>
      {popular && (
        <div className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">Most Popular</div>
      )}
      <h3 className="text-2xl font-bold mb-4">{plan}</h3>
      <p className="text-4xl font-extrabold mb-6">${price}<span className="text-base font-normal">/mo</span></p>
      <ul className="mb-6 text-gray-700 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx}>&#10003; {feature}</li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded text-white font-semibold ${popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
        Choose Plan
      </button>
    </div>
  );
}
