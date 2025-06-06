
import React from 'react';
import { DashboardComponent } from '@/types/dashboard';
import { Button } from '@/components/ui/button';

interface CarePlanProps {
  component: DashboardComponent;
}

export const CarePlan: React.FC<CarePlanProps> = ({ component }) => {
  const { data } = component;

  return (
    <div>
      <h3 className="text-xl font-medium mb-6">{component.title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.cards.map((card: any, index: number) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg text-white bg-gradient-to-br ${card.gradient}`}
          >
            <h4 className="text-lg font-medium">{card.title}</h4>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4 my-4">
        <Button variant="outline" size="sm">
          {data.sessionInfo.label}
        </Button>
        <div className="flex space-x-2 overflow-x-auto">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="text-xs px-4 py-2 rounded-md bg-gray-100">{`Lorem`}</div>
          ))}
        </div>
      </div>

      <div className="space-y-3 mt-8">
        {data.sessionInfo.sessions.map((session: any, index: number) => (
          <div key={index} className="flex items-center border-b border-gray-100 pb-3">
            <div className="w-24 text-sm">Lorem</div>
            <div className="w-24 text-sm text-indigo-600">Lorem</div>
            <div className="flex-1 text-sm">Lorem</div>
            <div className={`text-xs px-3 py-1 rounded-md ${
              session.status === 'Success' ? 'bg-green-100 text-green-700' : 
              session.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
              'bg-red-100 text-red-700'
            }`}>
              {session.status}
            </div>
            <div className="w-32 text-xs text-gray-500 text-right">{session.date}</div>
            <button className="ml-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="ml-2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6l-4-4-4 4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2v13" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
