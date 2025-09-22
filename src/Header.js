import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'join', label: 'How to Join' },
    { id: 'resources', label: 'Resources' },
    { id: 'faq', label: 'FAQ' },
    { id: 'conduct', label: 'Code of Conduct' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img
              src="/wiep-logo.png"
              alt="Logo"
              className="w-12 h-12 rounded-lg"
            />
            <span className="font-bold text-xl text-gray-900">WiEP</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <select 
              value={activeSection} 
              onChange={(e) => setActiveSection(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              {navigation.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;