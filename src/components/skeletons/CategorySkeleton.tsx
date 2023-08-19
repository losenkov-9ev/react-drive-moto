import React from 'react';
import ContentLoader from 'react-content-loader';

export const CategorySkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={370}
    height={170}
    style={{ marginBottom: 30 }}
    viewBox="0 0 370 170"
    backgroundColor="#cccccc"
    foregroundColor="#dbdbdb">
    <rect x="0" y="0" rx="3" ry="3" width="370" height="170" />
  </ContentLoader>
);
