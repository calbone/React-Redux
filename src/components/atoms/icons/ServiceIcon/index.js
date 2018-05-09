import React from 'react';

export default (props) => {
  const {
    serviceName,
    width,
    height,
    className
  } = props;
  const path = `public/icons/${serviceName}.svg`;
  return <img src={ path } className={ className } width={ width || 22 } height={ height || 22 } />;
};
