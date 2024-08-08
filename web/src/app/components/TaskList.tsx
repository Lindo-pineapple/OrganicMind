import React from "react";
import TaskItem from "./TaskItem";

const TaskList = (props: { Tasks: Task[] }) => {
  return props.Tasks.map((task: Task) => {
    return <TaskItem Task={task} />;
  });
};

export default TaskList;
