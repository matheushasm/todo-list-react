import { ChangeEvent, useState } from 'react';

import * as C from './App.Styles';
import { Task } from './components/Task';
import { InputTask } from './components/InputTask';

import { ListTaskTypes } from './types/ListTaskTypes';

const App = () => {

  const [tasks, setTasks] = useState<ListTaskTypes[]>([
    {id: 1, name: 'Fazer Bolo', completed: false},
    {id: 2, name: 'Fazer Chocolate', completed: true},
  ]);


  const handleSaveTask = (taskName: string) => {
    let taskList = [...tasks];

    taskList.push({
      id: (taskList.length + 1),
      name: taskName,
      completed: false
    })

    setTasks(taskList);
  }

  const handleStatusTaskChange = ( id: number) => {
    let taskList = [...tasks];
    taskList.filter( item => (item.id == id)? item.completed = !item.completed : item);
    setTasks(taskList);
  }

  const handleRemoveTask = (id: number) => {
    let taskList = tasks.filter( item => item.id !== id);
    setTasks(taskList);

  }

  return (
    <C.Container>
      <C.Area>
        <h1>To Do List</h1>

        <InputTask 
        saveTask={handleSaveTask}
        />

        {tasks.map( task => (
          <Task 
          key={task.id} 
          id={task.id}
          name={task.name} 
          status={task.completed}
          statusChange={handleStatusTaskChange}
          handleRemoveTask={handleRemoveTask}
          />
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App;