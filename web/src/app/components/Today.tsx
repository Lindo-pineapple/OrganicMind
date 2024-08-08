"use client";
import React from "react";
import { Button, Container } from "react-bootstrap";
import TaskItem from "./TaskItem";
import styles from "@/styles/TodayPage.module.scss";
import { FaPlus } from "react-icons/fa";
import TaskList from "./TaskList";

const DUMMYTASKS: Task[] = [
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
  return (
    <div
      style={{ height: "100%", width: "100%" }}
      className={`container ${styles.mainContainer}`}
    >
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
        <TaskList Tasks={DUMMYTASKS} />
      </div>
    </div>
  );
};

export default Today;
