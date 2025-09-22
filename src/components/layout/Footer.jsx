import React from 'react';
import { MessageCircle, Github, ExternalLink } from 'lucide-react';

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

          {/* Additional Links Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a 
                    href="https://hackmd.io/@poojaranjan/WiEPHandbook" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    WiEP Handbook <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ethereum.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    Ethereum.org <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://epf.wiki/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    EPF Wiki <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a 
                    href="https://ethereum-magicians.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    ETH Magicians <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ethresear.ch/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    Ethresear.ch <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.ethcatherders.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    Ethereum Cat Herders <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Program Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Duration: 10 weeks</li>
                <li>Sessions: 2 per week</li>
                <li>Expected: 1-2 PRs per participant</li>
                <li>Current: Cohort 4 (Active)</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p className="mb-4 md:mb-0">
                © 2025 Women in Ethereum Protocol. A community initiative by the Ethereum Foundation and Ethereum Cat Herders.
              </p>
              <div className="flex items-center gap-4">
                <span>Made with ❤️ by the WiEP community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;