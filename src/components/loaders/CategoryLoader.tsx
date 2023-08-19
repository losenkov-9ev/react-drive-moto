import React from 'react';

type TCategoryLoaderProps = {
  count: number;
  children: React.ReactNode;
};

export const CategoryLoader: React.FC<TCategoryLoaderProps> = ({ count, children }) => {
  return (
    <>
      {[...new Array(count)].map((_, index) => (
        <React.Fragment key={index}>{children}</React.Fragment>
      ))}
    </>
  );
};
