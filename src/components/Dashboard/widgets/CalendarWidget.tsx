
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardComponent } from '@/types/dashboard';

interface CalendarWidgetProps {
  component: DashboardComponent;
}

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({ component }) => {
  const { data } = component;

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle>{component.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.events?.map((event: any, index: number) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="font-medium text-gray-900">{event.title}</div>
              <div className="text-sm text-gray-600">{event.time}</div>
              {event.location && (
                <div className="text-xs text-gray-500">{event.location}</div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
