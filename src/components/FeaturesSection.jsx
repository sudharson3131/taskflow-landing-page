import React from 'react';
import { MdDashboard, MdPeople, MdUpdate, MdAccessAlarm } from 'react-icons/md'; // Material Design icons
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: MdDashboard,
      title: 'Drag & Drop Boards',
      description: 'Organize your tasks easily with drag-and-drop boards.',
    },
    {
      icon: MdPeople,
      title: 'Team Collaboration',
      description: 'Work with your team in real-time and stay on the same page.',
    },
    {
      icon: MdUpdate,
      title: 'Real-time Updates',
      description: 'Get instant updates on task progress and deadlines.',
    },
    {
      icon: MdAccessAlarm,
      title: 'Smart Reminders',
      description: 'Never miss a deadline with intelligent reminders.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Powerful Features to Boost Your Productivity
        </h2>
        <p className="text-gray-600 mb-12">
          Everything you need to manage tasks seamlessly.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <FeatureCard
              key={title}
              icon={<Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
