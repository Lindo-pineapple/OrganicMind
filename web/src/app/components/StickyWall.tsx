"use client";
import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import styles from "@/styles/StickyWall.module.scss";
import { AiOutlinePlus } from "react-icons/ai";

const StickyWall = (props: { notes: NoteType[]; menuOpen: boolean }) => {
  return (
    <Container
      fluid
      className={`p-0 vh-90 vw-100 container wall ${
        props.menuOpen ? styles.open : styles.close
      }`}
    >
      <h1 className={`title b ${styles.title}`}>Sticky Wall</h1>
      <Container fluid className={`container ${styles.cardContainer}`}>
          {props.notes.map((note) => {
            return (
              <Card
                className={`shadow ${styles.cardBox}`}
                style={{ backgroundColor: `${note.color}` }}
              >
                <Card.Body className={`${styles.cardBody}`}>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>
                    <pre style={{ width: "100%", whiteSpace: "pre-wrap" }}>
                      {note.text}
                    </pre>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
          <div className={`shadow ${styles.addCardBox}`}>
            <AiOutlinePlus className={`icon ${styles.plusIcon}`} size={80} />
          </div>
      </Container>
    </Container>
  );
};

export default StickyWall;
