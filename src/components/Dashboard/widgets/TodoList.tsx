
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardComponent } from '@/types/dashboard';

interface TodoListProps {
  component: DashboardComponent;
}

export const TodoList: React.FC<TodoListProps> = ({ component }) => {
  const { data } = component;

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle>{component.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.todos?.map((todo: any, index: number) => (
            <div key={index} className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                checked={todo.completed}
                className="w-4 h-4 text-blue-600"
                onChange={() => console.log(`Todo toggled: ${todo.title}`)}
              />
              <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {todo.title}
              </span>
              {todo.priority && (
                <span className={`text-xs px-2 py-1 rounded ${
                  todo.priority === 'high' ? 'bg-red-100 text-red-800' :
                  todo.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {todo.priority}
                </span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
