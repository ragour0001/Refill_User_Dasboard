
import React from 'react';
import { DashboardComponent } from '@/types/dashboard';
import { Button } from '@/components/ui/button';

interface WellnessGuideProps {
  component: DashboardComponent;
}

export const WellnessGuide: React.FC<WellnessGuideProps> = ({ component }) => {
  const { data } = component;

  return (
    <div className="bg-indigo-600 text-white rounded-lg p-6">
      <h3 className="text-xl font-medium mb-2">{component.title}</h3>
      <p className="text-indigo-100 mb-6">{data.subtitle}</p>

      <div className="space-y-4 mb-6">
        {data.steps.map((step: any) => (
          <div key={step.id} className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
              {step.completed ? (
                <span>✓</span>
              ) : (
                <span>{step.id}</span>
              )}
            </div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <div className="flex">
        <Button 
          variant="secondary" 
          className="bg-white text-indigo-700 hover:bg-indigo-100"
        >
          {data.cta}
        </Button>

        {data.illustration && (
          <div className="ml-auto">
            <img 
              src="/lovable-uploads/6a215aca-31f8-4d15-994c-ee047e5d7300.png" 
              alt="Wellness illustration" 
              className="h-24"
              style={{ opacity: 0.9 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
