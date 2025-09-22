import React from 'react';
import { Twitter, MessageCircle, BookOpen, Github } from 'lucide-react';

const Footer = ({ setActiveSection }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/wiep-logo.png"
                alt="Logo"
                className="w-12 h-12 rounded-lg"
              />
              <span className="font-bold text-xl">WiEP Study Group</span>
            </div>
            <p className="text-gray-400">
              Building diversity in the Ethereum protocol through collaborative learning and mentorship.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setActiveSection('about')} className="hover:text-white transition-colors">About WiEP</button></li>
              <li><button onClick={() => setActiveSection('join')} className="hover:text-white transition-colors">How to Join</button></li>
              <li><button onClick={() => setActiveSection('resources')} className="hover:text-white transition-colors">Resources</button></li>
              <li><button onClick={() => setActiveSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/wiepteam" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://discord.com/invite/JvEVfKBY6W" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://hackmd.io/@poojaranjan/WiEPHandbook" className="text-gray-400 hover:text-white transition-colors">
                <BookOpen className="w-5 h-5" />
              </a>
              <a href="https://github.com/wiepteam/studygroup/tree/main" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 Women in Ethereum Protocol Study Group. Supported by Ethereum Foundation and Ethereum Cat Herders.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;