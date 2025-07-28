
import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'Sonia Patel',
      company: 'Product Manager, Acme Corp',
      quote: 'TaskFlow transformed how our team collaborates. Highly recommend!',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'James Wong',
      company: 'Freelancer',
      quote: 'The real-time updates keep me on track every day.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Aisha Khan',
      company: 'CEO, Startup XYZ',
      quote: 'Intuitive and easy to use. TaskFlow is a must-have tool.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Users Say</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map(({ avatar, name, company, quote }) => (
            <TestimonialCard
              key={name}
              avatar={avatar}
              name={name}
              company={company}
              quote={quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
