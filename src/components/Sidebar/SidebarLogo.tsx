import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarLogoProps {
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
}

export const SidebarLogo: React.FC<SidebarLogoProps> = ({
  onClick,
  className,
  'aria-label': ariaLabel = 'Company logo',
}) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-5">
      <button
        className={cn(
          "justify-center items-center flex min-h-12 w-12 h-12 bg-[#EBEFF2] rounded-lg transition-colors duration-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          className
        )}
        onClick={onClick}
        aria-label={ariaLabel}
        type="button"
      >
        <div className="items-center flex w-12 gap-[18px] h-full p-3 rounded-xl">
          <div
            className="self-stretch flex min-h-6 w-6 my-auto bg-gray-400 rounded"
            role="img"
            aria-label="Logo placeholder"
          />
        </div>
      </button>
    </div>
  );
};
