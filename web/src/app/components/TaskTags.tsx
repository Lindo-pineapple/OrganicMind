import React from "react";
import { Button } from "react-bootstrap";
import styles from "@/styles/SideMenu.module.scss";

function TaskTags(props: { tags?: Tag[] }) {
  return (
    <div className={styles.tagContainer}>
      {props.tags &&
        props.tags.map((tag: Tag) => {
          return (
            <Button
              variant="light"
              className={styles.tag}
              style={{ backgroundColor: tag.tagColor }}
            >
              {tag.tagName}
            </Button>
          );
        })}
      <Button variant="light" className={`${styles.tag} ${styles.addTag}`}>
        + Add Tag
      </Button>
    </div>
  );
}

export default TaskTags;
