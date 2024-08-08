"use client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "@/styles/TodayPage.module.scss";
import { FaPlus } from "react-icons/fa";
import TaskList from "./TaskList";
import TaskMenu from "./TaskMenu";

const DUMMYTASKS: Task[] = [
  {
    id: 0,
    title: "Research content ideas",
    isDone: false,
    tags: [
      {
        tagName: "Tag 1",
        tagColor: "lightblue",
      },
    ],
  },
  {
    id: 1,
    title: "Create a database of guest authors",
    isDone: false,
    tags: [
      {
        tagName: "Tag 1",
        tagColor: "lightblue",
      },
      {
        tagName: "Tag 2",
        tagColor: "pink",
      },
    ],
  },
  {
    id: 2,
    title: "Renew driver's license",
    isDone: false,
    dueDate: "22-03-22",
    list: {
      listName: "Personal",
      listColor: "red",
    },
    subtasks: [
      {
        id: 10,
        title: "Subtask 1",
        isDone: false,
      },
      {
        id: 20,
        title: "Subtask 2",
        isDone: false,
      },
    ],
  },
  {
    id: 3,
    title: "Consult accountant",
    isDone: false,
    list: {
      listName: "List 1",
      listColor: "gold",
    },
    subtasks: [
      {
        id: 10,
        title: "Subtask 1",
        isDone: false,
      },
      {
        id: 20,
        title: "Subtask 2",
        isDone: false,
      },
      {
        id: 30,
        title: "Subtask 3",
        isDone: false,
      },
    ],
  },
  {
    id: 4,
    title: "Print business card",
    isDone: false,
  },
  {
    id: 0,
    title: "Research content ideas",
    isDone: false,
  },
  {
    id: 1,
    title: "Create a database of guest authors",
    isDone: false,
  },
  {
    id: 2,
    title: "Renew driver's license",
    isDone: false,
    dueDate: "22-03-22",
    list: {
      listName: "Personal",
      listColor: "red",
    },
    subtasks: [
      {
        id: 10,
        title: "Subtask 1",
        isDone: false,
      },
      {
        id: 20,
        title: "Subtask 2",
        isDone: false,
      },
    ],
  },
  {
    id: 3,
    title: "Consult accountant",
    isDone: false,
    list: {
      listName: "List 1",
      listColor: "gold",
    },
    subtasks: [
      {
        id: 10,
        title: "Subtask 1",
        isDone: false,
      },
      {
        id: 20,
        title: "Subtask 2",
        isDone: false,
      },
      {
        id: 30,
        title: "Subtask 3",
        isDone: false,
      },
    ],
  },
  {
    id: 4,
    title: "Print business card",
    isDone: false,
  },
];

const Today = (props: { badge: number }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task>({
    id: 0,
    title: "Research content ideas",
    isDone: false,
  });

  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  const handleTaskClick = (task: Task) => {
    setCurrentTask(task);
    handleShow();
  };

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      className={`container ${styles.mainContainer}`}
    >
      <TaskMenu show={showMenu} handleClose={handleClose} Task={currentTask} />
      <h1 className={`${styles.title}`}>Today</h1>
      <span className={`${styles.badge}`}>{props.badge}</span>
      <Button
        variant="light"
        className={`${styles.AddButton}`}
        onClick={() => {}}
      >
        <FaPlus size={20} className={styles.AddIcon} />
        <text className={styles.AddText}>Add New List</text>
      </Button>
      <div className={`container ${styles.ItemContainer}`}>
        <TaskList Tasks={DUMMYTASKS} onTaskClick={handleTaskClick} />
      </div>
    </div>
  );
};

export default Today;
