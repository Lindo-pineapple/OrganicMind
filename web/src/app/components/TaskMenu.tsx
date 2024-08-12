import React, { useState, useEffect } from "react";
import { Offcanvas, Button, Form } from "react-bootstrap";
import { FaPlus, FaSignOutAlt, FaSlidersH } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "@/styles/TaskMenu.module.scss";
import SelectMenu from "./SelectMenu";
import TaskTags from "./TaskTags";

interface SideMenuProps {
  show: boolean;
  handleClose: () => void;
  Task: Task;
}

const TaskMenu: React.FC<SideMenuProps> = ({ show, handleClose, Task }) => {
  const router = useRouter();
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className={styles.sideMenu}
      style={{ backdropFilter: "none" }}
      backdrop={false}
    >
      <Offcanvas.Header>
        <Offcanvas.Title>Task:</Offcanvas.Title>
        <Button
          variant="link"
          className={styles.closeButton}
          onClick={handleClose}
        >
          <IoClose size={24} />
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.offcanvasBody}>
        {/* Title bar */}
        <div className={`form ${styles.TitleDescriptionContainer}`}>
          <Form.Control
            type="text"
            placeholder="Task Title"
            value={Task.title}
            className={styles.TitleInput}
          />
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Description"
            value={Task.description}
            className={styles.DescriptionInput}
          />
        </div>
        <div className={`${styles.AdditionalDetailsContainer}`}>
          <div className={`${styles.TaskListContainer}`}>
            <span>List</span>
            <SelectMenu
              Items={[Task.list?.listName!, "Personal", "Work", "List 1"]}
            />
          </div>
          <div className={`${styles.TaskDateContainer}`}>
            <label>Due date</label>
            <SelectMenu
              Items={[Task.dueDate!, "09-08-24", "10-08-24", "11-08-24"]}
            />
          </div>
          <div className={`${styles.TaskTagsContainer}`}>
            <span>Tags</span>
            <TaskTags tags={Task.tags} />
          </div>
        </div>
        <div className={`${styles.SubTasksContainer}`}>
          <Offcanvas.Title>Subtasks:</Offcanvas.Title>
          <Button
            variant="light"
            className={`${styles.AddButton}`}
            onClick={() => {}}
          >
            <FaPlus size={20} className={styles.AddIcon} />
            <text className={styles.AddText}>Add New List</text>
          </Button>
          {Task.subtasks &&
            Task.subtasks.map((subTask: Task) => {
              return (
                <div className={`${styles.SubTask}`}>
                  <input
                    className={`form-check-input ${styles.TaskCheck}`}
                    type="checkbox"
                    id="flexCheckDefault"
                    checked={subTask.isDone}
                    onChange={() => {}}
                    size={25}
                  />
                  <text className={styles.TaskText}>{subTask.title}</text>
                </div>
              );
            })}
        </div>
      </Offcanvas.Body>
      <div className={styles.menuFooter}>
        {/* Menu items */}
        <Button
          variant="light"
          className={`${styles.menuButton} ${styles.btnDelete}`}
          onClick={() => {}}
        >
          Delete Task
        </Button>

        <Button
          variant="light"
          className={`${styles.menuButton} ${styles.btnSave}`}
          onClick={() => {}}
        >
          Save changes
        </Button>
      </div>
    </Offcanvas>
  );
};

export default TaskMenu;
