
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DashboardComponent } from '@/types/dashboard';

interface UpcomingEventsProps {
  component: DashboardComponent;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ component }) => {
  const { data } = component;

  return (
    <Card>
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg">{component.title}</CardTitle>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-gray-400" 
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
          <line x1="16" y1="2" x2="16" y2="6" strokeWidth={2} strokeLinecap="round" />
          <line x1="8" y1="2" x2="8" y2="6" strokeWidth={2} strokeLinecap="round" />
          <line x1="3" y1="10" x2="21" y2="10" strokeWidth={2} />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-gray-500 mb-4">15 Oct, 24</div>

        {data.events.map((event: any, index: number) => (
          <div key={index} className="mb-4">
            <Button 
              variant="default" 
              className="w-full bg-teal-700 hover:bg-teal-800"
            >
              {event.title}
            </Button>
          </div>
        ))}

        {/* Placeholder image for the calendar */}
        <div className="w-full h-24 bg-gray-200 rounded-lg mt-6"></div>
      </CardContent>
    </Card>
  );
};
