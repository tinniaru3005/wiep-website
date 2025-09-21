// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#cohorts', label: 'Cohorts' },
    { href: '#resources', label: 'Resources' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-purple-600 font-bold text-xl">W</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Women in Ethereum Protocol</h1>
              <p className="text-purple-100 text-sm">Building the future together</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-purple-200 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEay655qNjlMQ9wwsW7uJdxAg3PtOywBCYpoLxIAgD6HseMA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2 text-sm"
              >
                Join Now <ExternalLink size={14} />
              </a>
              <a
                href="https://discord.gg/JvEVfKBY6W"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2 text-sm"
              >
                <MessageCircle size={14} /> Discord
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-purple-500">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 hover:text-purple-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfEay655qNjlMQ9wwsW7uJdxAg3PtOywBCYpoLxIAgD6HseMA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2 justify-center"
                >
                  Join Cohort 4 <ExternalLink size={14} />
                </a>
                <a
                  href="https://discord.gg/JvEVfKBY6W"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center gap-2 justify-center"
                >
                  <MessageCircle size={14} /> Discord
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;