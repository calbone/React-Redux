import React from 'react';

export default (props) => {
  console.log(props);
  const { historyList } = props;
  return (
    <div>{historyList}</div>
  );
};
