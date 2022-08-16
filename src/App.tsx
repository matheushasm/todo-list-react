import { ChangeEvent, useState } from 'react';

import * as C from './App.Styles';
import { Task } from './components/Task';
import { InputTask } from './components/InputTask';

import { ListTaskTypes } from './types/TaskType';

const App = () => {

  const [tasks, setTasks] = useState<ListTaskTypes[]>([
    {id: 1, name: 'Fazer Bolo', completed: false},
    {id: 2, name: 'Fazer Chocolate', completed: true},
  ]);


  const handleSaveTask = (taskName: string) => {
    let newTaskList = [...tasks];

    newTaskList.push({
      id: (newTaskList.length + 1),
      name: taskName,
      completed: false
    })

    setTasks(newTaskList);
  }

  const handleStatusSave = ( id: number) => {
    let newTaskList = [...tasks];
    newTaskList.filter( item => (item.id == id)? item.completed = !item.completed : item);
    setTasks(newTaskList);
  }

  const handleRemoveTask = (id: number) => {
    let newTaskList = tasks.filter( item => item.id !== id);
    setTasks(newTaskList);
  }

  return (
    <C.Container>
      <C.Area>
        <h1>To Do List</h1>

        <InputTask 
        saveTaskFunction={handleSaveTask}
        />

        {tasks.map( task => (
          <Task 
          key={task.id} 
          id={task.id}
          name={task.name} 
          status={task.completed}
          handleStatus={handleStatusSave}
          handleRemoveFunction={handleRemoveTask}
          />
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App;