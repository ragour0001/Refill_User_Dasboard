
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardComponent } from '@/types/dashboard';

interface ActivityFeedProps {
  component: DashboardComponent;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ component }) => {
  const { data } = component;
  
  const getActivityColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500';
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getActivityBgColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50';
      case 'green':
        return 'bg-green-50';
      case 'yellow':
        return 'bg-yellow-50';
      case 'red':
        return 'bg-red-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle>{component.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.activities.map((activity: any) => (
            <div 
              key={activity.id} 
              className={`flex items-center space-x-4 p-4 rounded-lg ${getActivityBgColor(activity.color)}`}
            >
              <div className={`w-2 h-2 rounded-full ${getActivityColor(activity.color)}`}></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
