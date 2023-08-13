import React, { PropsWithChildren } from 'react';

const BlockTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="text-center py-10 text-3xl font-bold">{children}</h2>;
};

export default BlockTitle;
