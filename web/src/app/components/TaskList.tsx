// TaskList.tsx
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  Tasks,
  onTaskClick,
}: {
  Tasks: Task[];
  onTaskClick: (task: Task) => void;
}) => {
  return (
    <div>
      {Tasks.map((task) => (
        <TaskItem key={task.id} Task={task} onClick={onTaskClick} />
      ))}
    </div>
  );
};

export default TaskList;
