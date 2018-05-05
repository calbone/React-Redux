import React from 'react';
import { PrimaryButton } from '@/components/atoms/Button';

export function SupportTop({ task, tasks, inputTask, addTask }) {
  return (
    <div>
      <input type="text" onChange={e => inputTask(e.target.value)} />
      <input type="button" value="add" onClick={() => addTask(task)} />
      <p className="hoge">テキスト</p>
      <PrimaryButton />
      <ul>
        {tasks.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}