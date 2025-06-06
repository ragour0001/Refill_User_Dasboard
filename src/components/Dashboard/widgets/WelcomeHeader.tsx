import React from 'react';
import { DashboardComponent } from '@/types/dashboard';

interface WelcomeHeaderProps {
  component: DashboardComponent;
}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ component }) => {
  const { data } = component;

  return (
    <div className="px-0 py-0">
      <h1 className="text-[22px] font-bold text-gray-900 m-0">
        {data.greeting}, {data.name}
      </h1>
    </div>
  );
};
