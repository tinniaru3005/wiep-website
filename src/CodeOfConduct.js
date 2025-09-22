import React from 'react';

const CodeOfConduct = () => {
  return (
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
};

export default CodeOfConduct;