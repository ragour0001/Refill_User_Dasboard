import React, { useState } from 'react';
import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarLogo } from './SidebarLogo';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const menuItems = [
    { id: 0, icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/80f74dd4cc8870c6606f58941522db97eb0cb71c?placeholderIfAbsent=true', label: 'Dashboard' },
    { id: 1, icon: undefined, label: 'Analytics' },
    { id: 2, icon: undefined, label: 'Projects' },
    { id: 3, icon: undefined, label: 'Tasks' },
    { id: 4, icon: undefined, label: 'Calendar' },
    { id: 5, icon: undefined, label: 'Documents' },
    { id: 6, icon: undefined, label: 'Reports' },
    { id: 7, icon: undefined, label: 'Settings' },
    { id: 8, icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dccd3672782386afd6287f835802a7a798053cf8?placeholderIfAbsent=true', label: 'Profile' },
  ];

  const handleMenuItemClick = (itemId: number) => {
    setActiveItem(itemId);
  };

  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  return (
    <aside
      className="max-w-[72px] pt-5 border-[rgba(0,0,0,0.1)] border-r bg-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full flex-1">
        <div className="w-full flex-1">
          <div className="w-full">
            <nav className="flex w-full flex-col items-stretch justify-center px-3">
              <div className="w-full">
                <ul className="space-y-0" role="list">
                  {menuItems.map((item) => (
                    <SidebarMenuItem
                      key={item.id}
                      icon={item.icon}
                      isActive={activeItem === item.id}
                      onClick={() => handleMenuItemClick(item.id)}
                      aria-label={item.label}
                    />
                  ))}
                </ul>
              </div>
            </nav>
          </div>
          <div className="mt-auto">
            <SidebarLogo
              onClick={handleLogoClick}
              aria-label="Go to homepage"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
