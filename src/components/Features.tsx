import React from 'react';
import { Users, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    name: 'Community First',
    description: 'Build and grow your community with powerful moderation tools and engagement features.',
    icon: Users,
  },
  {
    name: 'Secure & Private',
    description: 'Your data is protected with enterprise-grade security and privacy controls.',
    icon: Shield,
  },
  {
    name: 'Lightning Fast',
    description: 'Experience real-time interactions with our optimized platform architecture.',
    icon: Zap,
  },
  {
    name: 'Global Reach',
    description: 'Connect with people from around the world with our scalable infrastructure.',
    icon: Globe,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Tenacity provides all the tools you need to build and manage your community effectively.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;