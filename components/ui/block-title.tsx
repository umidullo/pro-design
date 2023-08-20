import React, { PropsWithChildren } from 'react';

const BlockTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-center pt-6 pb-1 lg:py-10 text-xl lg:text-3xl font-bold">
      {children}
    </h2>
  );
};

export default BlockTitle;
