import React, { useState } from 'react';
import './WiEPWebsite.css';
import { ChevronDown, Github, Twitter, MessageCircle, Users, Code, BookOpen, Heart } from 'lucide-react';

const WiEPWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'join', label: 'How to Join' },
    { id: 'resources', label: 'Resources' },
    { id: 'faq', label: 'FAQ' },
    { id: 'conduct', label: 'Code of Conduct' }
  ];

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

  const resources = [
    {
      category: "General Ethereum Resources",
      items: [
        { name: "Ethereum.org", url: "https://ethereum.org/", description: "The official Ethereum website" },
        { name: "Ethereum Foundation Blog", url: "https://blog.ethereum.org/", description: "Updates and insights on the Ethereum ecosystem" },
        { name: "Ethereum Roadmap", url: "https://ethereum.org/en/roadmap/", description: "Overview of Ethereum's major upgrades" },
        { name: "EIPs", url: "https://eips.ethereum.org/", description: "Ethereum Improvement Proposals" }
      ]
    },
    {
      category: "Execution Clients",
      items: [
        { name: "Geth", url: "https://github.com/ethereum/go-ethereum", description: "Go-Ethereum implementation" },
        { name: "Nethermind", url: "https://github.com/NethermindEth/nethermind", description: ".NET Ethereum client" },
        { name: "Erigon", url: "https://github.com/ledgerwatch/erigon", description: "Go Ethereum client focused on performance" },
        { name: "Besu", url: "https://github.com/hyperledger/besu", description: "Java Ethereum client" },
        { name: "Reth", url: "https://github.com/paradigmxyz/reth", description: "Rust Ethereum execution client" }
      ]
    },
    {
      category: "Consensus Clients",
      items: [
        { name: "Lighthouse", url: "https://github.com/sigp/lighthouse", description: "Rust Ethereum consensus client" },
        { name: "Prysm", url: "https://github.com/prysmaticlabs/prysm", description: "Go implementation of Ethereum consensus" },
        { name: "Teku", url: "https://github.com/ConsenSys/teku", description: "Java Ethereum consensus client" },
        { name: "Nimbus", url: "https://github.com/status-im/nimbus-eth2", description: "Nim Ethereum consensus client" }
      ]
    }
  ];

  const renderHome = () => (
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

  const renderAbout = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is WiEP?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Women in Ethereum Protocol (WiEP) is a community committed to bringing gender diversity within the Ethereum ecosystem. 
          Initiated by the Ethereum Foundation and Ethereum Cat Herders, WiEP aims to drive the Ethereum protocol toward a 
          decentralized future where every voice is heard.
        </p>
        <p className="text-lg text-gray-700">
          Our mission is to make diversity the norm, not the exception, in the Ethereum ecosystem, ensuring that contributors 
          of all genders feel valued, inspired, and supported.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Study Group</h3>
        <p className="text-gray-700 mb-6">
          The WiEP Study Group is an initiative to provide a hands-on, supportive community for learning the Ethereum protocol. 
          Unlike a traditional study group, our focus is on practical, project-based collaboration.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Learn Together:</strong> Participate in collaborative, hands-on sessions focused on the Ethereum protocol</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Build Community:</strong> Connect and network with others passionate about Ethereum and blockchain technology</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Skill Development:</strong> Enrich your technical skills by contributing to open-source projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Mentorship and Support:</strong> Access mentors, resources, and guidance throughout your journey</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span><strong>Empowerment:</strong> Encourage more women to actively contribute to the Ethereum protocol</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <p className="text-blue-900">
          <strong>Note:</strong> This study group is primarily intended for intermediate to advanced developers with at least one year of coding experience. 
          If you are newer to coding or the Ethereum ecosystem but feel motivated to dive in, we encourage you to give it a try!
        </p>
      </div>
    </div>
  );

  const renderJoin = () => (
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

  const renderResources = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Resources</h2>
        <p className="text-lg text-gray-700 mb-8">
          A curated list of resources to help you learn more about the Ethereum protocol, its ongoing developments, and the wider ecosystem.
        </p>
      </div>

      {resources.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
          <div className="grid gap-4">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <a 
                    href={item.url} 
                    className="ml-4 text-purple-600 hover:text-purple-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderFAQ = () => (
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

  const renderCodeOfConduct = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Code of Conduct</h2>
        <p className="text-lg text-gray-700 mb-8">
          By participating in the Women in Ethereum Protocol Group, members agree to abide by this Code of Conduct 
          and help create a supportive and inclusive community.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Respect and Inclusion</h3>
          <p className="text-gray-700">
            We are committed to fostering an inclusive environment where everyone, regardless of gender, race, ethnicity, 
            sexual orientation, disability, or background, is respected and valued. Discrimination, harassment, or 
            exclusionary behavior of any kind will not be tolerated.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Professionalism</h3>
          <p className="text-gray-700">
            All members are expected to conduct themselves professionally and with integrity. This includes maintaining 
            a positive and supportive attitude during discussions, collaborations, and events. Personal attacks, trolling, 
            and derogatory language are strictly prohibited.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration and Support</h3>
          <p className="text-gray-700">
            We encourage open collaboration and the sharing of knowledge. Members should feel comfortable asking questions, 
            offering support, and contributing ideas. Constructive feedback should be given with the intent to help others grow, 
            and any criticism should be delivered respectfully.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Anti-Harassment Policy</h3>
          <p className="text-gray-700">
            Harassment includes, but is not limited to, offensive language, unwanted attention, stalking, and inappropriate 
            physical contact. Any member who experiences or witnesses harassment should report it immediately to the group 
            moderators or organizers.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Commitment to Diversity</h3>
          <p className="text-gray-700">
            We believe that diversity drives innovation and creativity. All efforts should be made to include diverse voices 
            and perspectives in discussions, projects, and events. Members should actively work to ensure that the group 
            remains a welcoming space for women and non-binary individuals.
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Accountability</h3>
          <p className="text-gray-700">
            Members are accountable for their actions and behavior within the group. Violations of this Code of Conduct 
            may result in warnings, suspension, or removal from the group. Group moderators and organizers have the 
            authority to enforce this Code of Conduct and take appropriate actions to address any issues that arise.
          </p>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
        <p className="text-purple-900">
          For more details, refer to the <a href="https://hackmd.io/@poojaranjan/WiEPHandbook#WiEP---Code-of-Conduct" 
          className="text-purple-700 underline hover:text-purple-800" target="_blank" rel="noopener noreferrer">
          WiEP Handbook</a>.
        </p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'join': return renderJoin();
      case 'resources': return renderResources();
      case 'faq': return renderFAQ();
      case 'conduct': return renderCodeOfConduct();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg"></div>
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg"></div>
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
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Women in Ethereum Protocol Study Group. Supported by Ethereum Foundation and Ethereum Cat Herders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WiEPWebsite;