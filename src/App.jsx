import React, { useState } from 'react';
import { Calendar, Users, Code, ExternalLink, Github, MessageCircle, BookOpen, Award, ChevronDown, ChevronUp, User, Clock, MapPin } from 'lucide-react';

// Import components
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import CurrentCohort from './components/sections/CurrentCohort';
import PreviousCohorts from './components/sections/PreviousCohorts';
import Resources from './components/sections/Resources';

// Footer Component
const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
          <p className="text-gray-300 mb-8">
            Ready to contribute to the Ethereum protocol? Join our community and start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://discord.gg/JvEVfKBY6W"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={16} /> Discord Community
            </a>
            <a 
              href="https://x.com/wiepteam"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Follow on X
            </a>
            <a 
              href="https://github.com/wiepteam/studygroup"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Women in Ethereum Protocol. A community initiative by the Ethereum Foundation and Ethereum Cat Herders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <About />
      <CurrentCohort />
      <PreviousCohorts />
      <Resources />
      <Footer />
    </div>
  );
};

export default App;