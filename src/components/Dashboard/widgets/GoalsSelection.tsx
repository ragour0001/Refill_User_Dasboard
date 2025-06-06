
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardComponent } from '@/types/dashboard';

interface GoalsSelectionProps {
  component: DashboardComponent;
}

export const GoalsSelection: React.FC<GoalsSelectionProps> = ({ component }) => {
  const { data } = component;

  return (
    <div>
      <Tabs defaultValue={data.activeTab}>
        <TabsList className="border-b border-gray-200 w-full justify-start">
          {data.tabs.map((tab: string) => (
            <TabsTrigger 
              key={tab} 
              value={tab}
              className="px-6 py-2 data-[state=active]:border-b-2 data-[state=active]:border-gray-900"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">{data.instruction}</p>
          <Button size="sm" variant="outline" className="h-8">Done</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.goals.map((goal: any) => (
            <div 
              key={goal.id}
              className={`p-3 rounded-lg border flex items-center gap-2 cursor-pointer ${
                goal.selected ? 'bg-gray-50 border-gray-300' : 'border-gray-200'
              }`}
            >
              <span className="text-xl">{goal.icon}</span>
              <span className="text-sm">{goal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
