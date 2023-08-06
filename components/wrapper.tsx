import { PropsWithChildren, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge('w-full max-w-[1440px] px-4', className)}>
      {children}
    </div>
  );
};

export default Wrapper;
