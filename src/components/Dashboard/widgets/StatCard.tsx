
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DashboardComponent } from '@/types/dashboard';
import { cn } from '@/lib/utils';

interface StatCardProps {
  component: DashboardComponent;
}

export const StatCard: React.FC<StatCardProps> = ({ component }) => {
  const { data, config } = component;
  
  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'primary':
        return 'border-blue-200 bg-blue-50';
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'info':
        return 'border-purple-200 bg-purple-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50';
  };

  return (
    <Card className={cn(
      "transition-shadow hover:shadow-md",
      getThemeClasses(config.theme || 'default')
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{component.title}</p>
            <p className="text-2xl font-bold text-gray-900">{data.value}</p>
          </div>
          <Badge 
            variant="secondary" 
            className={getTrendColor(data.trend)}
          >
            {data.change}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
