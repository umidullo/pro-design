import React from 'react';
import { twMerge } from 'tailwind-merge';

const BlurCircle = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        'absolute pointer-events-none z-[-1] w-80 aspect-square rounded-full blur-3xl opacity-30',
        className
      )}
    />
  );
};

export default BlurCircle;
