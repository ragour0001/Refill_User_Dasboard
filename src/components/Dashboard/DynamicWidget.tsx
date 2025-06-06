
import React from 'react';
import { DashboardComponent } from '@/types/dashboard';
import { StatCard } from './widgets/StatCard';
import { ChartWidget } from './widgets/ChartWidget';
import { ActivityFeed } from './widgets/ActivityFeed';
import { ProjectCard } from './widgets/ProjectCard';
import { QuickActions } from './widgets/QuickActions';
import { TodoList } from './widgets/TodoList';
import { CalendarWidget } from './widgets/CalendarWidget';
import { WelcomeHeader } from './widgets/WelcomeHeader';
import { ProfileOverview } from './widgets/ProfileOverview';
import { WellnessJourney } from './widgets/WellnessJourney';
import { WellnessGuide } from './widgets/WellnessGuide';
import { GoalsSelection } from './widgets/GoalsSelection';
import { MicroLearning } from './widgets/MicroLearning';
import { CarePlan } from './widgets/CarePlan';
import { UpcomingEvents } from './widgets/UpcomingEvents';

interface DynamicWidgetProps {
  component: DashboardComponent;
  className?: string;
  style?: React.CSSProperties;
}

export const DynamicWidget: React.FC<DynamicWidgetProps> = ({ component, className, style }) => {
  const renderWidget = () => {
    switch (component.type) {
      case 'stat-card':
        return <StatCard component={component} />;
      case 'chart':
        return <ChartWidget component={component} />;
      case 'activity-feed':
        return <ActivityFeed component={component} />;
      case 'project-card':
        return <ProjectCard component={component} />;
      case 'quick-actions':
        return <QuickActions component={component} />;
      case 'todo-list':
        return <TodoList component={component} />;
      case 'calendar-widget':
        return <CalendarWidget component={component} />;
      case 'welcome-header':
        return <WelcomeHeader component={component} />;
      case 'profile-overview':
        return <ProfileOverview component={component} />;
      case 'wellness-journey':
        return <WellnessJourney component={component} />;
      case 'wellness-guide':
        return <WellnessGuide component={component} />;
      case 'goals-selection':
        return <GoalsSelection component={component} />;
      case 'micro-learning':
        return <MicroLearning component={component} />;
      case 'care-plan':
        return <CarePlan component={component} />;
      case 'upcoming-events':
        return <UpcomingEvents component={component} />;
      default:
        return (
          <div className="p-4 border border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">Unknown widget type: {component.type}</p>
          </div>
        );
    }
  };

  return (
    <div className={className} style={style}>
      {renderWidget()}
    </div>
  );
};
