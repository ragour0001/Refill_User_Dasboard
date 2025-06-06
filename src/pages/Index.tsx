import React from 'react';
import { Sidebar } from "@/components/Sidebar";
import { PersonalizedDashboard } from "@/components/Dashboard/PersonalizedDashboard";

const Index = () => {
  // In a real app, this would come from authentication context
  const currentUserId = "user-123";

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8" role="main">
        <div className="text-sm text-gray-500 mb-4">
          Global Dashboard &gt; Home
        </div>
        <PersonalizedDashboard userId={currentUserId} />
      </main>
    </div>
  );
};

export default Index;
