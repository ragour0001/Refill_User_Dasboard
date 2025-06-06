import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarMenuItemProps {
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  icon,
  isActive = false,
  onClick,
  className,
  'aria-label': ariaLabel,
}) => {
  // Default SVG icons for each label
  const defaultIcons: Record<string, JSX.Element> = {
    Dashboard: (
      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
    Analytics: (
      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19V6M6 19v-4M16 19v-2M21 19V9" />
      </svg>
    ),
    Projects: (
      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
    Tasks: (
      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    Calendar: (
      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect width="18" height="18" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    Documents: (
      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7v10M17 7v10M7 7h10M7 17h10" />
      </svg>
    ),
    Reports: (
      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17v-6a2 2 0 012-2h14a2 2 0 012 2v6" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" />
      </svg>
    ),
    Settings: (
      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    Profile: (
      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" />
      </svg>
    ),
  };

  return (
    <li className="w-full">
      <button
        className={cn(
          "flex min-h-12 w-full items-stretch mt-1 transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl",
          className
        )}
        onClick={onClick}
        aria-label={ariaLabel}
        type="button"
      >
        <div
          className={cn(
            "flex min-h-12 w-12 gap-[18px] p-3 rounded-xl items-center justify-center transition-colors duration-200",
            isActive && "bg-[#EFFBFA]"
          )}
        >
          {icon ? (
            <img
              src={icon}
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
              alt=""
              role="presentation"
            />
          ) : (
            defaultIcons[ariaLabel || 'Dashboard'] || defaultIcons['Dashboard']
          )}
        </div>
      </button>
    </li>
  );
};
