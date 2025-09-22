import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqData = [
    {
      question: "How do I know when the program starts?",
      answer: "WiEP hosts two cohorts each year—one in spring and another in autumn. They're announced in advance. Fill out our sign-up form, follow us on X, and join our Discord server to stay informed about important dates and announcements."
    },
    {
      question: "Is there a selection process?",
      answer: "Yes. Depending on the number of applications, we may check your GitHub account to ensure participants meet basic requirements."
    },
    {
      question: "I don't know much about the Ethereum Protocol. Can I still apply?",
      answer: "Yes. Gaps in knowledge are expected. We ask that you have at least some coding experience and a strong motivation to learn. If you feel inspired to dive in, we still encourage you to apply."
    },
    {
      question: "Will I learn how to build smart contracts and dApps?",
      answer: "No. This program primarily focuses on protocol-level contributions rather than building decentralized applications (dApps). Participants often work on GitHub issues related to Ethereum clients."
    },
    {
      question: "Is the WiEP Study Group remote?",
      answer: "Yes. WiEP is global and operates primarily online. We do our best to accommodate participants from different time zones."
    },
    {
      question: "Will I get paid?",
      answer: "No. This is a free initiative, and there is no financial compensation for participation."
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-700 mb-8">
          Below are some of the most common questions about the WiEP Study Group. If you have a question that isn't answered here, 
          feel free to reach out via our Discord server or on X.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
            </button>
            {expandedFaq === index && (
              <div className="px-6 pb-6">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;