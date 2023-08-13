import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={twMerge('w-full max-w-[1440px] px-4 mx-auto', className)}
    >
      {children}
    </section>
  );
};

export default Wrapper;
