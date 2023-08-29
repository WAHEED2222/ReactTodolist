import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ todoList, onDelete }) {
  return (
    <div className="list">
      {todoList.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
