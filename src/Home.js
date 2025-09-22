import React from 'react';
import { Heart, Users, Code, BookOpen } from 'lucide-react';

const Home = ({ setActiveSection }) => {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full text-purple-800">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">Building Diversity in Ethereum</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Women in Ethereum<br />
          <span className="text-purple-600">Protocol Study Group</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A supportive and inclusive environment for women interested in contributing to the Ethereum protocol through hands-on, collaborative learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setActiveSection('join')}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Join the Community
          </button>
          <button 
            onClick={() => setActiveSection('about')}
            className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
          <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn Together</h3>
          <p className="text-gray-600">Participate in collaborative, hands-on sessions focused on the Ethereum protocol with like-minded peers.</p>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
          <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Skill Development</h3>
          <p className="text-gray-600">Enrich your technical skills by contributing to open-source projects and exploring the protocol under the hood.</p>
        </div>
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
          <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship</h3>
          <p className="text-gray-600">Access mentors, resources, and guidance to help you succeed throughout your learning journey.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;