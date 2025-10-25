'use client';

import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading...', 
  size = 'md',
  className = '',
  fullScreen = true
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'md':
        return 'w-8 h-8';
      case 'lg':
        return 'w-12 h-12';
      case 'xl':
        return 'w-16 h-16';
      default:
        return 'w-8 h-8';
    }
  };

  const content = (
    <div className="text-center">
      <div className="relative">
        <div className={`animate-spin rounded-full border-b-2 border-purple-600 mx-auto mb-4 ${getSizeClasses()}`}></div>
        <div className={`absolute inset-0 rounded-full border-t-2 border-blue-600 mx-auto animate-ping opacity-20 ${getSizeClasses()}`}></div>
      </div>
      {message && <p className="text-gray-300 text-lg font-medium">{message}</p>}
      <p className="text-gray-500 text-sm mt-2">K2AI</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      {content}
    </div>
  );
};

// Additional loading components
export function PageLoadingOverlay({ text = 'Đang tải...' }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-slate-800/90 rounded-2xl p-8 border border-white/10">
        <LoadingSpinner size="lg" message={text} fullScreen={false} />
      </div>
    </div>
  );
}

export function GameCardSkeleton() {
  return (
    <div className="bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl p-1 animate-pulse">
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="w-8 h-8 bg-gray-600 rounded"></div>
          <div className="w-16 h-6 bg-gray-600 rounded-full"></div>
        </div>
        
        <div className="h-6 bg-gray-600 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-600/70 rounded mb-3 w-full"></div>
        
        <div className="flex gap-2 mb-3">
          <div className="w-16 h-6 bg-gray-600 rounded-full"></div>
          <div className="w-20 h-6 bg-gray-600 rounded-full"></div>
        </div>
        
        <div className="h-4 bg-gray-600/50 rounded mb-3 w-1/2"></div>
        
        <div className="mb-4">
          <div className="h-3 bg-gray-600/50 rounded mb-2 w-1/3"></div>
          <div className="flex gap-1">
            <div className="w-12 h-5 bg-gray-600/50 rounded"></div>
            <div className="w-16 h-5 bg-gray-600/50 rounded"></div>
            <div className="w-14 h-5 bg-gray-600/50 rounded"></div>
          </div>
        </div>
        
        <div className="w-full h-10 bg-gray-600/50 rounded-lg"></div>
      </div>
    </div>
  );
}

export function ContentLoadingPlaceholder({ 
  lines = 3, 
  className = '',
}: { 
  lines?: number; 
  className?: string; 
}) {
  return (
    <div className={`animate-pulse space-y-4 ${className}`}>
      <div className="h-6 bg-gray-700/50 rounded-lg w-3/4"></div>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-700/30 rounded w-full"></div>
      ))}
      <div className="h-4 bg-gray-700/30 rounded w-2/3"></div>
    </div>
  );
}

export default LoadingSpinner;
