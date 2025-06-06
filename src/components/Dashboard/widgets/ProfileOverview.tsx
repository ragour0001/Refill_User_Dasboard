import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DashboardComponent } from '@/types/dashboard';

interface ProfileOverviewProps {
  component: DashboardComponent;
}

export const ProfileOverview: React.FC<ProfileOverviewProps> = ({ component }) => {
  const { data } = component;
  const [imgError, setImgError] = useState(false);

  // Helper to get initials from name
  const getInitials = (name: string) => {
    if (!name) return '';
    return name.split(' ').map((n: string) => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">{component.title}</h3>
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 mb-3 overflow-hidden flex items-center justify-center">
            {!imgError && data.profileImage ? (
              <img
                src={data.profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              // Human icon SVG fallback
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
          </div>
          <span className="text-sm text-blue-600">{data.completionText}</span>
        </div>

        {/* Insights Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">{data.insights.icon}</span>
            <p className="text-sm">{data.insights.title}</p>
          </div>
        </div>

        {/* Daily Streak */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium">Daily Streak</h4>
            <span className="text-xs text-blue-600">See More</span>
          </div>
          
          <div className="flex justify-center my-4">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-amber-500 text-xl">🔥</span>
            </div>
          </div>
          
          <h5 className="text-center font-medium mb-1">Your Streak</h5>
          <p className="text-xs text-center text-gray-500 mb-4">{data.streak.description}</p>
          
          <Button variant="default" className="w-full bg-teal-700 hover:bg-teal-800">Complete Assessment</Button>
        </div>

        {/* Rewards */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🏅</span>
            <h4 className="text-sm font-medium">{data.rewards.title}</h4>
          </div>
          <p className="text-xs text-gray-500 mb-2">{data.rewards.description}</p>
          
          <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
            <div className="bg-amber-500 h-2 rounded-full w-1/3"></div>
          </div>
          
          <Button variant="outline" className="w-full border-teal-700 text-teal-700 hover:bg-teal-50">Claim reward</Button>
        </div>
      </CardContent>
    </Card>
  );
};
