import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is Tenacity Social?",
    answer: "Tenacity Social is a modern community platform that helps you build, manage, and grow your online community with powerful tools and features."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply sign up for an account, create your community, and invite your members. Our intuitive interface will guide you through the process."
  },
  {
    question: "Is Tenacity Social free to use?",
    answer: "We offer both free and premium plans. The free plan includes essential features to get started, while premium plans offer advanced tools and capabilities."
  },
  {
    question: "Can I integrate Tenacity with other platforms?",
    answer: "Yes! Tenacity Social offers various integration options with popular platforms and services to enhance your community experience."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div id="faq" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    className="text-left w-full flex justify-between items-start text-gray-400"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      {openIndex === index ? (
                        <Minus className="h-6 w-6 text-purple-600" />
                      ) : (
                        <Plus className="h-6 w-6 text-purple-600" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;