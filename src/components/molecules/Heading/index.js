import React from 'react';
import styles from './style.scss';

export default (props) => {
  const { children } = props;
  return (
    <h1 className={styles.heading}>
      <span className={styles.headingDescription}>{children}</span>
    </h1>
  );
};
