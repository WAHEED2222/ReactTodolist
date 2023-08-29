import React, { useState } from "react";
import './App.css';
import TaskList from "./TaskList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTodoList = [...todoList, { taskName: newTask, id: Date.now() }];
      setTodoList(newTodoList);
      setNewTask(''); // Clear the input field after adding a task
    }
  };

  const deleteTask = (id) => {
    const updatedTodoList = todoList.filter(task => task.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleInputChange} value={newTask} className="input" placeholder="Add Your Todolist"></input>
        <button onClick={addTask} className="btnAddtask">Add Task</button>
      </div>
      <TaskList todoList={todoList} onDelete={deleteTask} />
    </div>
  );
}

export default App;
