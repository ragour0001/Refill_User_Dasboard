import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DashboardComponent } from '@/types/dashboard';
import { Button } from '@/components/ui/button';

interface WellnessJourneyProps {
  component: DashboardComponent;
}

export const WellnessJourney: React.FC<WellnessJourneyProps> = ({ component }) => {
  const { data } = component;

  return (
    <Card className="border border-gray-200 mt-2">
      <CardContent className="pt-2 pb-6 px-6">
        <div className="flex gap-2 mb-2">
          <span className="text-xl">🚀</span>
          <h3 className="text-lg font-medium">{component.title}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">{data.subtitle}</p>

        {data.steps.map((step: any) => (
          <div key={step.id} className="border border-gray-200 bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-500 text-sm">✓</span>
              </div>
              <p className="text-sm">{step.title}</p>
            </div>
            
            <div className="mt-3 w-full bg-gray-200 h-2 rounded-full">
              <div 
                className="bg-red-500 h-2 rounded-full" 
                style={{ width: `${step.progress}%` }}
              ></div>
            </div>
          </div>
        ))}

        <div className="flex justify-between">
          <Button variant="link" className="text-blue-600 p-0">
            {data.actions.learnMore}
          </Button>
          
          <Button variant="outline" className="text-teal-700 border-teal-700 hover:bg-teal-50">
            {data.actions.completeAssessment}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
