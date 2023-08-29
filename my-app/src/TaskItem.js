import React from "react";

function TaskItem({ task, onDelete }) {
  return (
    <div className="TaskItem">
      <h1>{task.taskName}</h1><button onClick={() => onDelete(task.id)} className="delete">Delete</button>
      
    </div>
  );
}

export default TaskItem;
