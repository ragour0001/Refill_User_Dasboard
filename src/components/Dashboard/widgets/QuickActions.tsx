
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DashboardComponent } from '@/types/dashboard';

interface QuickActionsProps {
  component: DashboardComponent;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ component }) => {
  const { data } = component;

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle>{component.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {data.actions?.map((action: any, index: number) => (
            <Button 
              key={index}
              variant={action.variant || 'default'}
              size={action.size || 'default'}
              className="h-auto py-4"
              onClick={() => console.log(`Action clicked: ${action.label}`)}
            >
              <div className="text-center">
                <div className="text-sm font-medium">{action.label}</div>
                {action.description && (
                  <div className="text-xs opacity-80 mt-1">{action.description}</div>
                )}
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
