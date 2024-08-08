import React from "react";
import { Button } from "react-bootstrap";
import { FaChevronRight, FaSquare } from "react-icons/fa";
import { FaCalendarXmark } from "react-icons/fa6";
import styles from "@/styles/TaskItem.module.scss";

const TaskItem = (props: { Task: Task }) => {
    return (
      <div className={`${styles.TaskContainer}`} onClick={() => {}}>
        <div className={`${styles.MainTask}`}>
          <div className={`${styles.LeftSection}`}>
            <input
              className={`form-check-input ${styles.TaskCheck}`}
              type="checkbox"
              id="flexCheckDefault"
              checked={props.Task.isDone}
            />
            <text className={styles.TaskText}>{props.Task.title}</text>
          </div>
          <FaChevronRight className={styles.TaskIcon} />
        </div>
        {props.Task.list && props.Task.subtasks && (
          <div className={`${styles.TaskDetails}`}>
            <div className={`${styles.TaskList}`}>
              <div className={styles.ListText}>
                <FaSquare
                  className={styles.ListIcon}
                  size={18}
                  style={{ color: props.Task.list.listColor }}
                />
                {props.Task.list.listName}
              </div>
            </div>
            <span className={`${styles.seperator}`}>|</span>
            <div className={`${styles.SubTasks}`}>
              <div className={styles.SubTasksText}>
                <span className={`${styles.badge}`}>
                  {props.Task.subtasks.length}
                </span>
                Subtasks
              </div>
            </div>
            {props.Task.dueDate && <span className={`${styles.seperator}`}>|</span>}
            {props.Task.dueDate && (
              <div className={`${styles.DueDate}`}>
                <div className={styles.DateText}>
                  <FaCalendarXmark className={styles.DateIcon} />
                  {props.Task.dueDate}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default TaskItem;
