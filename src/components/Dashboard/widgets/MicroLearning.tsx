import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DashboardComponent } from '@/types/dashboard';

interface MicroLearningProps {
  component: DashboardComponent;
}

export const MicroLearning: React.FC<MicroLearningProps> = ({ component }) => {
  const { data } = component;

  return (
    <div>
      <h3 className="text-xl font-medium mb-2">{component.title}</h3>
      <p className="text-sm text-gray-600 mb-6">{data.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.cards.map((card: any, index: number) => (
          <Card key={index} className="border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                <div className="flex items-start justify-between">
                  <span>{card.title}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-400" 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full p-4 pt-0">
              <div className="flex mb-1">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded mr-2">{card.level}</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{card.type}</span>
                <span className="text-xs text-gray-500 ml-auto">{card.duration}</span>
              </div>
              <p className="text-sm text-gray-600 my-3">{card.description}</p>

              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full text-sm">
                  {card.action}
                </Button>
                <Button variant="default" size="sm" className="w-full text-sm bg-teal-700 hover:bg-teal-800">
                  Take assessment to Personalize
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
