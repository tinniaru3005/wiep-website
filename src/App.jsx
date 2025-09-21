import React, { useState } from 'react';
import { Calendar, Users, Code, ExternalLink, Github, MessageCircle, BookOpen, Award, ChevronDown, ChevronUp, User, Clock, MapPin } from 'lucide-react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">W</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Women in Ethereum Protocol</h1>
              <p className="text-purple-100">Building the future together</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-purple-200 transition-colors">About</a>
            <a href="#cohorts" className="hover:text-purple-200 transition-colors">Cohorts</a>
            <a href="#resources" className="hover:text-purple-200 transition-colors">Resources</a>
            <a href="#contact" className="hover:text-purple-200 transition-colors">Contact</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <a href="#about" className="block py-2 hover:text-purple-200">About</a>
            <a href="#cohorts" className="block py-2 hover:text-purple-200">Cohorts</a>
            <a href="#resources" className="block py-2 hover:text-purple-200">Resources</a>
            <a href="#contact" className="block py-2 hover:text-purple-200">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Empowering Women in <span className="text-purple-600">Ethereum Protocol</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A supportive community for women interested in contributing to the Ethereum protocol. 
          Learn, build, and contribute to the future of decentralized technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEay655qNjlMQ9wwsW7uJdxAg3PtOywBCYpoLxIAgD6HseMA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            Join Cohort 4 <ExternalLink size={16} />
          </a>
          <a 
            href="https://discord.gg/JvEVfKBY6W"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors flex items-center gap-2"
          >
            <MessageCircle size={16} /> Join Discord
          </a>
        </div>
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  const stats = [
    { label: "Active Cohorts", value: "4", icon: Users },
    { label: "Merged PRs", value: "50+", icon: Code },
    { label: "Community Members", value: "200+", icon: MessageCircle },
    { label: "Weeks of Learning", value: "10", icon: Calendar }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-purple-600" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About WiEP Study Group</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                Women in Ethereum Protocol (WiEP) is a community committed to bringing gender diversity 
                within the Ethereum ecosystem. Initiated by the Ethereum Foundation and Ethereum Cat Herders, 
                WiEP aims to drive the Ethereum protocol toward a decentralized future where every voice is heard.
              </p>
              <p className="text-gray-600">
                Our mission is to make diversity the norm, not the exception, in the Ethereum ecosystem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Key Features</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <BookOpen className="text-purple-600 mt-1" size={16} />
                  <span className="text-gray-600">Learn Together: Collaborative, hands-on sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-purple-600 mt-1" size={16} />
                  <span className="text-gray-600">Build Community: Network with passionate developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Code className="text-purple-600 mt-1" size={16} />
                  <span className="text-gray-600">Skill Development: Contribute to open-source projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-purple-600 mt-1" size={16} />
                  <span className="text-gray-600">Mentorship: Access to expert guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Current Cohort Component
const CurrentCohort = () => {
  const [expandedSession, setExpandedSession] = useState(null);

  const sessions = [
    { week: 1, type: "Kickoff", date: "11th September 2025 - 16:00 UTC", speaker: "WiEP Team", topic: "Opening Ceremony & Program Overview" },
    { week: 2, type: "Guest Lecture", date: "18th September 2025 - 15:00 UTC", speaker: "Mario Havel", topic: "Ethereum Protocol Fundamentals" },
    { week: 2, type: "Stand-up", date: "19th September 2025 - 16:00 UTC", speaker: "-", topic: "Weekly Progress Discussion" },
    { week: 3, type: "Guest Lecture", date: "25th September 2025 - 16:00 UTC", speaker: "Matthew Keil", topic: "Consensus Layer Architecture" },
    { week: 4, type: "Guest Lecture", date: "2nd October 2025 - 16:00 UTC", speaker: "SamWilsn", topic: "Execution Layer Specs" },
    { week: 5, type: "Guest Lecture", date: "9th October 2025 - 16:00 UTC", speaker: "jtraglia", topic: "Consensus Layer Specs" }
  ];

  const mentors = [
    { name: "SamWilsn", role: "EELS Mentor", discord: "samwilsn", repo: "Ethereum Execution Spec" },
    { name: "Jtraglia", role: "Consensus Spec Mentor", discord: "jtraglia", repo: "Ethereum Consensus Spec" },
    { name: "Sally (macfarla)", role: "Besu Mentor", discord: "macfarla", repo: "Besu (EL)" },
    { name: "Csaba (cskiraly)", role: "Geth Mentor", discord: "cskiraly", repo: "Geth (EL)" },
    { name: "Potuz", role: "Prysm Mentor", discord: "potuz", repo: "Prysm (CL)" },
    { name: "Matthew Keil & Phil", role: "Lodestar Mentors", discord: "matthewkeil, philngo", repo: "Lodestar (CL)" }
  ];

  return (
    <section id="cohorts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Cohort</h2>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full inline-block font-semibold">
              Cohort 4 - Active
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Program Structure */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="text-purple-600" />
                Program Structure
              </h3>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">10</div>
                    <div className="text-gray-600">Weeks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">2</div>
                    <div className="text-gray-600">Sessions/Week</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {sessions.slice(0, 6).map((session, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
                      onClick={() => setExpandedSession(expandedSession === index ? null : index)}
                    >
                      <div>
                        <div className="font-semibold">Week {session.week} - {session.type}</div>
                        <div className="text-sm text-gray-600">{session.topic}</div>
                      </div>
                      {expandedSession === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    
                    {expandedSession === index && (
                      <div className="px-4 pb-4 border-t border-gray-200 bg-gray-50">
                        <div className="pt-3 space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-gray-500" />
                            <span>{session.date}</span>
                          </div>
                          {session.speaker !== "-" && (
                            <div className="flex items-center gap-2">
                              <User size={16} className="text-gray-500" />
                              <span>{session.speaker}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors & Repositories */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="text-purple-600" />
                Mentors & Repositories
              </h3>
              
              <div className="space-y-4">
                {mentors.map((mentor, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-gray-800">{mentor.name}</div>
                        <div className="text-sm text-purple-600">{mentor.role}</div>
                        <div className="text-sm text-gray-600 mt-1">{mentor.repo}</div>
                      </div>
                      <div className="text-xs text-gray-500">
                        @{mentor.discord}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">Goals for Participants</h4>
                <ul className="text-sm space-y-1 text-purple-700">
                  <li>• At least 1-2 merged PRs per participant</li>
                  <li>• Deep understanding of Ethereum protocol</li>
                  <li>• Strong foundation in open-source workflow</li>
                  <li>• Network within Ethereum developer community</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Previous Cohorts Component
const PreviousCohorts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Previous Cohorts</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((cohortNum) => (
              <div key={cohortNum} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Cohort {cohortNum}</h3>
                <div className="text-gray-600 mb-4">
                  <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Details coming soon...</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Successfully completed with multiple PRs merged and active community contributions.
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-gray-600">
            <p>Each cohort has contributed significantly to the Ethereum ecosystem through meaningful protocol contributions and community building.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Resources Component
const Resources = () => {
  const resourceCategories = [
    {
      title: "Getting Started",
      resources: [
        { name: "Ethereum.org", url: "https://ethereum.org/", description: "Official Ethereum documentation" },
        { name: "Ethereum Foundation Blog", url: "https://blog.ethereum.org/", description: "Latest updates and insights" },
        { name: "Ethereum Roadmap", url: "https://ethereum.org/en/roadmap/", description: "Major upgrades and milestones" }
      ]
    },
    {
      title: "Protocol Specs",
      resources: [
        { name: "Execution Specs", url: "https://github.com/ethereum/execution-specs", description: "Execution layer specifications" },
        { name: "Consensus Specs", url: "https://github.com/ethereum/consensus-specs", description: "Consensus layer specifications" },
        { name: "EIPs", url: "https://eips.ethereum.org/", description: "Ethereum Improvement Proposals" }
      ]
    },
    {
      title: "Community",
      resources: [
        { name: "ETH Magicians", url: "https://ethereum-magicians.org/", description: "Technical discussions and EIP reviews" },
        { name: "Ethresear.ch", url: "https://ethresear.ch/", description: "Research forum for advanced topics" },
        { name: "EPF Wiki", url: "https://epf.wiki/", description: "Ethereum Protocol Fellowship resources" }
      ]
    }
  ];

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">{category.title}</h3>
                <div className="space-y-4">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="bg-white p-4 rounded-lg border border-gray-200">
                      <a 
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-800 hover:text-purple-600 flex items-center gap-2"
                      >
                        {resource.name}
                        <ExternalLink size={14} />
                      </a>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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