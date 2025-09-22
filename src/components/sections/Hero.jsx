import React from 'react';
import { ExternalLink, MessageCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Empowering Women in{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ethereum Protocol
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A supportive community for women interested in contributing to the Ethereum protocol. 
            Learn, build, and contribute to the future of decentralized technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfEay655qNjlMQ9wwsW7uJdxAg3PtOywBCYpoLxIAgD6HseMA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Join Cohort 4 <ArrowRight size={20} />
            </a>
            <a 
              href="https://discord.gg/JvEVfKBY6W"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all flex items-center gap-2"
            >
              <MessageCircle size={20} /> Join Discord
            </a>
          </div>

          <div className="text-sm text-gray-500">
            <p>🎯 10-week intensive program • 🚀 1-2 PRs per participant • 🌟 Expert mentorship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;