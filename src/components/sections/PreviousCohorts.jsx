import React from 'react';
import { Calendar, Users, GitPullRequest } from 'lucide-react';

const PreviousCohorts = () => {
  const cohorts = [
    {
      id: 1,
      title: "Cohort 1",
      period: "2023",
      status: "Completed",
      description: "Inaugural cohort that established the foundation for the program",
      participants: "TBD",
      prs: "TBD",
      highlight: "First cohort to establish WiEP program structure"
    },
    {
      id: 2,
      title: "Cohort 2",
      period: "Early 2024",
      status: "Completed",
      description: "Expanded participation and refined the learning experience",
      participants: "TBD",
      prs: "TBD",
      highlight: "Enhanced mentor engagement and community building"
    },
    {
      id: 3,
      title: "Cohort 3",
      period: "Late 2024",
      status: "Completed",
      description: "Successfully completed with multiple merged PRs and active community contributions",
      participants: "TBD",
      prs: "TBD",
      highlight: "Highest completion rate and community engagement"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Previous Cohorts</h2>
            <p className="text-xl text-gray-600">
              Each cohort has contributed significantly to the Ethereum ecosystem through 
              meaningful protocol contributions and community building.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cohorts.map((cohort) => (
              <div key={cohort.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{cohort.title}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {cohort.status}
                  </span>
                </div>
                
                <div className="text-gray-600 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm">{cohort.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {cohort.description}
                </p>

                <div className="bg-white p-3 rounded border">
                  <div className="text-sm text-gray-500 mb-2">Key Achievement:</div>
                  <div className="text-sm font-medium text-purple-600">
                    {cohort.highlight}
                  </div>
                </div>

                <div className="mt-4 flex gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Users size={14} />
                    <span>{cohort.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <GitPullRequest size={14} />
                    <span>{cohort.prs} PRs</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-purple-50 p-8 rounded-lg border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              📊 Detailed cohort data will be added as historical information becomes available
            </h3>
            <p className="text-purple-700">
              We're working to compile comprehensive statistics and outcomes from all previous cohorts. 
              This will include participant achievements, merged PRs, and long-term ecosystem contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousCohorts;