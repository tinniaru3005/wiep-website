import React from 'react';
import { ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: "General Ethereum Resources",
      items: [
        { name: "Ethereum.org", url: "https://ethereum.org/", description: "The official Ethereum website" },
        { name: "Ethereum Foundation Blog", url: "https://blog.ethereum.org/", description: "Updates and insights on the Ethereum ecosystem" },
        { name: "Ethereum Roadmap", url: "https://ethereum.org/en/roadmap/", description: "Overview of Ethereum's major upgrades" },
        { name: "EIPs", url: "https://eips.ethereum.org/", description: "Ethereum Improvement Proposals" },
        { name: "EPF Wiki", url: "https://epf.wiki/#/", description: "Ethereum Protocol Fellowship Wiki" }
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

  return (
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
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;