import React from 'react';
import './style.scss';
import { PrimaryButton } from '@/components/atoms/Button';

export default ({ task, tasks, inputTask, addTask }) => {
  return (
    <div>
      <div className="buttonWrap">
        <PrimaryButton />
      </div>
      <ul>
        {tasks.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
