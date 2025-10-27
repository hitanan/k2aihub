'use client';

import { ChevronDown, HelpCircle } from 'lucide-react';
import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface InteractiveFAQProps {
  faqs: FAQ[];
  primaryColor?: string;
}

const InteractiveFAQ: React.FC<InteractiveFAQProps> = ({ faqs, primaryColor = 'blue' }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 flex items-center">
        <HelpCircle className={`w-5 h-5 sm:w-6 sm:h-6 mr-3 text-${primaryColor}-400 flex-shrink-0`} />
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="border border-white/10 rounded-xl p-4 sm:p-6 bg-white/5 group">
            <summary className="flex items-center justify-between cursor-pointer">
              <h3 className="text-lg font-semibold text-black group-hover:text-blue-200 transition-colors">
                {faq.question}
              </h3>
              <ChevronDown className="w-5 h-5 text-black group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-4 text-black-300 text-sm sm:text-base leading-relaxed">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
export default InteractiveFAQ;