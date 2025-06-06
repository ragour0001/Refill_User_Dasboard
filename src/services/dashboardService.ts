import { UserPersona, DashboardLayout } from '@/types/dashboard';

// Mock API service for healthcare dashboard
export class DashboardService {
  private static baseUrl = '/api/dashboard';

  static async getUserPersona(userId: string): Promise<UserPersona> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: userId,
          name: 'Shalini',
          type: 'analyst',
          preferences: {
            primaryColor: '#6366F1',
            layout: 'mixed',
            widgets: ['profile', 'wellness-journey', 'goals', 'micro-learning', 'care-plan']
          }
        });
      }, 500);
    });
  }

  static async getDashboardLayout(personaId: string): Promise<DashboardLayout> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          personaId,
          layout: {
            columns: 12,
            rows: 12,
            gap: 6
          },
          components: [
            {
              id: 'welcome-header',
              type: 'welcome-header',
              title: 'Good Morning, Shalini',
              position: { row: 1, col: 1, span: 8 },
              data: {
                greeting: 'Good Morning',
                name: 'Shalini',
                timeOfDay: 'morning'
              },
              config: { size: 'large', theme: 'default' }
            },
            {
              id: 'wellness-journey',
              type: 'wellness-journey',
              title: 'Let\'s get you started',
              position: { row: 2, col: 1, span: 8 },
              data: {
                subtitle: 'Complete these steps to start Your Wellness Journey',
                steps: [
                  {
                    id: 1,
                    title: 'You\'re just getting started - Let\'s kick off your Wellness Journey!',
                    status: 'progress',
                    progress: 60
                  }
                ],
                actions: {
                  learnMore: 'Learn More',
                  completeAssessment: 'Complete your Assessment'
                }
              },
              config: { size: 'large', theme: 'primary' }
            },
            {
              id: 'wellness-guide',
              type: 'wellness-guide',
              title: 'Still unsure about what you need?',
              position: { row: 3, col: 1, span: 8 },
              data: {
                subtitle: 'Take 3 small steps to help us match you with the right care plan and support.',
                steps: [
                  { id: 1, text: 'Set 1-3 wellness goals', completed: false },
                  { id: 2, text: 'Take a short assessment', completed: false },
                  { id: 3, text: 'Tell us your therapist preferences', completed: false }
                ],
                cta: 'Discover Yourself',
                illustration: true
              },
              config: { size: 'large', theme: 'purple' }
            },
            {
              id: 'goals-selection',
              type: 'goals-selection',
              title: 'My Goals',
              position: { row: 4, col: 1, span: 8 },
              data: {
                tabs: ['Recommendation', 'My Progress', 'My Goals'],
                activeTab: 'My Goals',
                instruction: 'Select up to 3 goals',
                goals: [
                  { id: 1, icon: '😊', text: 'Manage stress', selected: true },
                  { id: 2, icon: '😊', text: 'Boost mood & feel positive', selected: false },
                  { id: 3, icon: '✏️', text: 'Sleep better', selected: true },
                  { id: 4, icon: '🔋', text: 'Prevent burnout', selected: false },
                  { id: 5, icon: '😰', text: 'Manage anxiety', selected: false },
                  { id: 6, icon: '🎯', text: 'Improve focus & productivity', selected: true },
                  { id: 7, icon: '💪', text: 'Strengthen personal or work relationships', selected: false },
                  { id: 8, icon: '🏆', text: 'Build self-confidence', selected: false },
                  { id: 9, icon: '⚖️', text: 'Improve work-life balance', selected: false },
                  { id: 10, icon: '🧘', text: 'Feel calm', selected: false }
                ]
              },
              config: { size: 'large', theme: 'default' }
            },
            {
              id: 'micro-learning',
              type: 'micro-learning',
              title: 'Micro Learnings',
              position: { row: 5, col: 1, span: 8 },
              data: {
                subtitle: 'Short reads designed to support your well-being. Complete your assessment to get personalized suggestions.',
                cards: [
                  {
                    title: 'What is Microlearning?',
                    level: 'Beginner',
                    type: 'Overview',
                    duration: '2-min read',
                    description: 'Microlearning offers quick, focused reads to help you manage mental health one step at a time.',
                    action: 'Take a Look'
                  },
                  {
                    title: 'Why Short Reads Help',
                    level: 'Beginner',
                    type: 'Motivation',
                    duration: '2-min read',
                    description: 'Learn how bite-sized articles reduce overwhelm and help you make steady progress.',
                    action: 'Take a Look'
                  },
                  {
                    title: 'Personalize Your Learning',
                    level: 'Interactive',
                    type: 'Overview',
                    duration: '2-min read',
                    description: 'Get tailored recommendations by taking a short assessment.',
                    action: 'Take a Look'
                  }
                ]
              },
              config: { size: 'large', theme: 'default' }
            },
            {
              id: 'care-plan',
              type: 'care-plan',
              title: 'Care Plan',
              position: { row: 6, col: 1, span: 8 },
              data: {
                cards: [
                  {
                    title: 'Create ambient awareness through different senses',
                    color: 'dark',
                    gradient: 'from-purple-900 to-purple-700'
                  },
                  {
                    title: 'Create ambient awareness through different senses',
                    color: 'orange',
                    gradient: 'from-orange-500 to-orange-400'
                  },
                  {
                    title: 'Create ambient awareness through different senses',
                    color: 'green',
                    gradient: 'from-green-500 to-green-400'
                  },
                  {
                    title: 'Create ambient awareness through different senses',
                    color: 'blue',
                    gradient: 'from-blue-500 to-blue-400'
                  }
                ],
                sessionInfo: {
                  label: 'Set Therapy Session',
                  sessions: [
                    { status: 'Pending', date: '16 December 2022' },
                    { status: 'Success', date: '16 December 2022' },
                    { status: 'Cancelled', date: '17 December 2022' },
                    { status: 'Pending', date: '17 December 2022' },
                    { status: 'Success', date: '18 December 2022' }
                  ]
                }
              },
              config: { size: 'large', theme: 'default' }
            },
            {
              id: 'profile-overview',
              type: 'profile-overview',
              title: 'Profile Overview',
              position: { row: 1, col: 9, span: 4 },
              data: {
                profileImage: '/lovable-uploads/6a215aca-31f8-4d15-994c-ee047e5d7300.png',
                completionText: 'Complete your Profile',
                insights: {
                  title: 'Get your insights, just complete the assessment',
                  icon: '🏆'
                },
                streak: {
                  title: 'Daily Streak',
                  days: 5,
                  description: 'Complete The Assessment, & Do Your Goals!'
                },
                rewards: {
                  title: 'Welcome to rewards',
                  description: 'Use Reward Points For Free Sessions',
                  points: 150
                }
              },
              config: { size: 'medium', theme: 'default' }
            },
            {
              id: 'upcoming-events',
              type: 'upcoming-events',
              title: 'Upcoming Events',
              position: { row: 2, col: 9, span: 4 },
              data: {
                events: [
                  {
                    title: 'Complete Assessment',
                    date: 'Today',
                    type: 'assessment'
                  }
                ]
              },
              config: { size: 'medium', theme: 'default' }
            }
          ]
        });
      }, 300);
    });
  }

  static async getComponentData(componentId: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          componentId,
          data: {},
          lastUpdated: new Date().toISOString()
        });
      }, 200);
    });
  }
}
