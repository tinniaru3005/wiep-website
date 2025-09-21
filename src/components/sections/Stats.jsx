import React from 'react';
import { Users, Code, MessageCircle, Calendar, GitPullRequest, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: "Active Cohorts", value: "4", icon: Calendar, color: "from-purple-500 to-purple-600" },
    { label: "Merged PRs", value: "50+", icon: GitPullRequest, color: "from-blue-500 to-blue-600" },
    { label: "Community Members", value: "200+", icon: Users, color: "from-green-500 to-green-600" },
    { label: "Program Weeks", value: "10", icon: Clock, color: "from-orange-500 to-orange-600" },
    { label: "Client Repositories", value: "6+", icon: Code, color: "from-indigo-500 to-indigo-600" },
    { label: "Global Reach", value: "15+", icon: Globe, color: "from-pink-500 to-pink-600" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
