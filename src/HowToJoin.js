import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';

const HowToJoin = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Join</h2>
        <p className="text-lg text-gray-700 mb-8">
          Ready to get involved? Follow these steps to join our community and stay updated about upcoming cohorts.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Follow Our Social Media</h3>
          <p className="text-gray-700 mb-4">Stay updated with the latest announcements about upcoming cohorts.</p>
          <div className="flex gap-4">
            <a href="https://x.com/wiepteam" className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Twitter className="w-4 h-4" />
              <span>Follow on X</span>
            </a>
            <a href="https://discord.com/invite/JvEVfKBY6W" className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>Join Discord</span>
            </a>
            <a href="https://github.com/wiepteam/studygroup/tree/main" className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Register for a Cohort</h3>
          <p className="text-gray-700">
            When a new cohort is announced, go to the README of the upcoming cohort and fill in the registration form.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Get Started</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Explore the cohort folders and their dedicated READMEs</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Familiarize yourself with our resources</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Follow our Code of Conduct</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Review the FAQ for common questions</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <p className="text-purple-900">
          <strong>Requirements:</strong> A GitHub account is required for participation. We recommend at least one year of coding experience, 
          though motivated beginners are welcome to apply!
        </p>
      </div>
    </div>
  );
};

export default HowToJoin;