import React, { useState, useEffect } from 'react';
import { DashboardService } from '@/services/dashboardService';
import { UserPersona, DashboardLayout, DashboardComponent } from '@/types/dashboard';
import { DynamicWidget } from './DynamicWidget';
import { cn } from '@/lib/utils';

interface PersonalizedDashboardProps {
  userId: string;
  className?: string;
}

export const PersonalizedDashboard: React.FC<PersonalizedDashboardProps> = ({ 
  userId, 
  className 
}) => {
  const [persona, setPersona] = useState<UserPersona | null>(null);
  const [layout, setLayout] = useState<DashboardLayout | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDashboard();
  }, [userId]);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Load user persona and dashboard layout
      const [personaData, layoutData] = await Promise.all([
        DashboardService.getUserPersona(userId),
        DashboardService.getDashboardLayout(userId)
      ]);
      
      setPersona(personaData);
      setLayout(layoutData);
    } catch (err) {
      setError('Failed to load dashboard');
      console.error('Dashboard loading error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getGridPosition = (component: DashboardComponent) => {
    const { row, col, span = 1 } = component.position;
    return {
      gridRow: row,
      gridColumn: `${col} / span ${span}`,
    };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={loadDashboard}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!persona || !layout) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-600">No dashboard configuration found</p>
      </div>
    );
  }

  // Split components into main and sidebar widgets
  const mainWidgetTypes = [
    'welcome-header',
    'wellness-journey',
    'wellness-guide',
    'goals-selection',
    'micro-learning',
    'care-plan',
  ];
  const sidebarWidgetTypes = [
    'profile-overview',
    'upcoming-events',
  ];
  const mainWidgets = layout.components.filter(c => mainWidgetTypes.includes(c.type));
  const sidebarWidgets = layout.components.filter(c => sidebarWidgetTypes.includes(c.type));

  return (
    <div className={cn("w-full max-w-7xl mx-auto px-6", className, `dashboard-${persona.type}`)}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main content: 3/4 width on large screens */}
        <div className="col-span-3 flex flex-col gap-4">
          {mainWidgets.map((component) => (
            <DynamicWidget
              key={component.id}
              component={component}
              className="min-h-0"
            />
          ))}
        </div>
        {/* Sidebar: 1/4 width on large screens */}
        <div className="col-span-1 flex flex-col gap-4">
          {sidebarWidgets.map((component) => (
            <DynamicWidget
              key={component.id}
              component={component}
              className="min-h-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
