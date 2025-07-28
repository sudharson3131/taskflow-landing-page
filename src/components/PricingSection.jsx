import React from 'react';
import PricingCard from './PricingCard';

export default function PricingSection() {
  const plans = [
    {
      plan: 'Free',
      price: 0,
      features: ['Up to 3 projects', 'Basic collaboration', 'Limited support'],
      popular: false,
    },
    {
      plan: 'Pro',
      price: 15,
      features: ['Unlimited projects', 'Advanced collaboration', 'Priority support'],
      popular: true,
    },
    {
      plan: 'Team',
      price: 30,
      features: ['Everything in Pro', 'Team management', 'Custom integrations'],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Choose the plan that fits you best</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {plans.map(({ plan, price, features, popular }) => (
            <PricingCard
              key={plan}
              plan={plan}
              price={price}
              features={features}
              popular={popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
