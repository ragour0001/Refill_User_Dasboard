
export interface UserPersona {
  id: string;
  name: string;
  type: 'executive' | 'manager' | 'analyst' | 'developer' | 'designer';
  preferences: {
    primaryColor: string;
    layout: 'grid' | 'list' | 'mixed';
    widgets: string[];
  };
}

export interface DashboardComponent {
  id: string;
  type: 'stat-card' | 'chart' | 'activity-feed' | 'quick-actions' | 'project-card' | 'todo-list' | 'calendar-widget' | 'welcome-header' | 'profile-overview' | 'wellness-journey' | 'wellness-guide' | 'goals-selection' | 'micro-learning' | 'care-plan' | 'upcoming-events';
  title: string;
  position: {
    row: number;
    col: number;
    span?: number;
  };
  data: any;
  config: {
    theme?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: string;
  };
}

export interface DashboardLayout {
  personaId: string;
  components: DashboardComponent[];
  layout: {
    columns: number;
    rows: number;
    gap: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
