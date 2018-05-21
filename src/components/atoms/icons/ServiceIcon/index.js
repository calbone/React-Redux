import React from 'react';
import iconPath from './iconPath';

export default props => {
  const { serviceName, width, height, className } = props;
  const path = iconPath[serviceName];
  return (
    <img
      src={path}
      className={className}
      width={width || 22}
      height={height || 22}
    />
  );
};
