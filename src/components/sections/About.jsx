import React from 'react';
import { BookOpen, Users, Code, Award, Heart, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Learn Together',
      description: 'Collaborative, hands-on sessions focused on the Ethereum protocol'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Network with passionate developers and researchers'
    },
    {
      icon: Code,
      title: 'Skill Development',
      description: 'Contribute to open-source projects and explore the protocol'
    },
    {
      icon: Award,
      title: 'Expert Mentorship',
      description: 'Access to experienced protocol developers and researchers'
    },
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'Encourage more women to actively contribute to Ethereum'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Make meaningful contributions to decentralized technology'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About WiEP Study Group</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A community committed to bringing gender diversity within the Ethereum ecosystem, 
              driving the protocol toward a decentralized future where every voice is heard.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              To make diversity the norm, not the exception, in the Ethereum ecosystem. 
              Initiated by the Ethereum Foundation and Ethereum Cat Herders, WiEP ensures 
              that contributors of all genders feel valued, inspired, and supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
