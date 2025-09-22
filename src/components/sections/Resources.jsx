import React from 'react';
import { ExternalLink, BookOpen, Code, Users, Globe } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      resources: [
        { name: "Ethereum.org", url: "https://ethereum.org/", description: "Official Ethereum documentation" },
        { name: "Ethereum Foundation Blog", url: "https://blog.ethereum.org/", description: "Latest updates and insights" },
        { name: "Ethereum Roadmap", url: "https://ethereum.org/en/roadmap/", description: "Major upgrades and milestones" }
      ]
    },
    {
      title: "Protocol Specs",
      icon: Code,
      resources: [
        { name: "Execution Specs", url: "https://github.com/ethereum/execution-specs", description: "Execution layer specifications" },
        { name: "Consensus Specs", url: "https://github.com/ethereum/consensus-specs", description: "Consensus layer specifications" },
        { name: "EIPs", url: "https://eips.ethereum.org/", description: "Ethereum Improvement Proposals" }
      ]
    },
    {
      title: "Community",
      icon: Users,
      resources: [
        { name: "ETH Magicians", url: "https://ethereum-magicians.org/", description: "Technical discussions and EIP reviews" },
        { name: "Ethresear.ch", url: "https://ethresear.ch/", description: "Research forum for advanced topics" },
        { name: "EPF Wiki", url: "https://epf.wiki/", description: "Ethereum Protocol Fellowship resources" }
      ]
    }
  ];

  const clientCategories = [
    {
      title: "Execution Clients",
      clients: [
        { name: "Geth", url: "https://github.com/ethereum/go-ethereum", language: "Go" },
        { name: "Besu", url: "https://github.com/hyperledger/besu", language: "Java" },
        { name: "Nethermind", url: "https://github.com/NethermindEth/nethermind", language: "C#" },
        { name: "Erigon", url: "https://github.com/ledgerwatch/erigon", language: "Go" },
        { name: "Reth", url: "https://github.com/paradigmxyz/reth", language: "Rust" }
      ]
    },
    {
      title: "Consensus Clients",
      clients: [
        { name: "Lighthouse", url: "https://github.com/sigp/lighthouse", language: "Rust" },
        { name: "Prysm", url: "https://github.com/prysmaticlabs/prysm", language: "Go" },
        { name: "Lodestar", url: "https://github.com/ChainSafe/lodestar", language: "TypeScript" },
        { name: "Teku", url: "https://github.com/ConsenSys/teku", language: "Java" },
        { name: "Nimbus", url: "https://github.com/status-im/nimbus-eth2", language: "Nim" }
      ]
    }
  ];

  return (
    <section id="resources" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Learning Resources</h2>
            <p className="text-xl text-gray-600">
              Everything you need to start contributing to the Ethereum protocol
            </p>
          </div>
          
          {/* Main Resource Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center">
                    <category.icon className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-600">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <a 
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-800 hover:text-purple-600 flex items-center gap-2 mb-1"
                      >
                        {resource.name}
                        <ExternalLink size={14} />
                      </a>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Client Repositories */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-8">Ethereum Clients</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {clientCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h4 className="text-lg font-semibold mb-4 text-blue-600">{category.title}</h4>
                  <div className="space-y-3">
                    {category.clients.map((client, clientIndex) => (
                      <div key={clientIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-gray-800 hover:text-blue-600 flex items-center gap-2"
                        >
                          {client.name}
                          <ExternalLink size={12} />
                        </a>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                          {client.language}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Recommended Learning Path</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="font-semibold mb-2">1. Foundation</div>
                <div>Start with Ethereum.org and basic concepts</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="font-semibold mb-2">2. Deep Dive</div>
                <div>Read protocol specs and EIPs</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="font-semibold mb-2">3. Choose Client</div>
                <div>Pick a client in your preferred language</div>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <div className="font-semibold mb-2">4. Contribute</div>
                <div>Start with good first issues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;