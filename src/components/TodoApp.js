import React from 'react';

export function TodoApp({ task, tasks, inputTask, addTask }) {
    return (
        <div>
            <input type="text" onChange={e => inputTask(e.target.value)} />
            <input type="button" value="add" onClick={() => addTask(task)} />
            <p className="hoge">テキスト</p>
            <ul>
                {tasks.map((item, i) => {
                    return <li key={i}>{item}</li>;
                })}
            </ul>
        </div>
    );
}
