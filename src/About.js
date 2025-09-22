import React from 'react';

const About = () => {
  return (
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
};

export default About;