import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Globe } from 'lucide-react';

// Mock data for demonstration
const websites = [
  {
    id: 1,
    name: 'Main Website',
    url: 'https://example.com',
    status: 'up',
    uptimeHistory: [true, true, true, false, true, true, true, true, true, true], // last 30 mins in 3-min intervals
  },
  {
    id: 2,
    name: 'API Service',
    url: 'https://api.example.com',
    status: 'down',
    uptimeHistory: [false, false, true, true, true, false, false, false, true, true],
  },
  {
    id: 3,
    name: 'Documentation',
    url: 'https://docs.example.com',
    status: 'up',
    uptimeHistory: [true, true, true, true, true, true, true, true, true, true],
  },
];

function StatusCircle({ status }: { status: string }) {
  return (
    <div className={`w-3 h-3 rounded-full ${status === 'up' ? 'bg-green-500' : 'bg-red-500'}`} />
  );
}

function UptimeTicks({ history }: { history: boolean[] }) {
  return (
    <div className="flex gap-1 mt-4">
      {history.map((isUp, index) => (
        <div
          key={index}
          className={`w-8 h-2 rounded ${isUp ? 'bg-green-500' : 'bg-red-500'}`}
          title={`${isUp ? 'Up' : 'Down'} - ${(index + 1) * 3} minutes ago`}
        />
      ))}
    </div>
  );
}

function WebsiteCard({ website }: { website: typeof websites[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <StatusCircle status={website.status} />
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">{website.name}</h3>
            <p className="text-sm text-gray-500">{website.url}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-4 border-t border-gray-100">
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Last 30 minutes uptime</h4>
            <UptimeTicks history={website.uptimeHistory} />
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex items-center gap-3 mb-8">
          <Globe className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Uptime Monitor</h1>
        </div>
        
        <div className="space-y-4">
          {websites.map(website => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;