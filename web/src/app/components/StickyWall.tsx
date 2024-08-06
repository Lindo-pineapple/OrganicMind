"use client";
import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "@/styles/StickyWall.module.scss";
import WallCard from "./WallCard";
import { AiOutlinePlus } from "react-icons/ai";

const StickyWall = (props: { notes: NoteType[] }) => {
  return (
    <Container fluid className={`p-0 vh-90 vw-100 container wall`}>
      <h1 className={`title b ${styles.title}`}>Sticky Wall</h1>
      <Container fluid className={`container ${styles.cardContainer}`}>
        {props.notes.map((note) => {
          return (
            <WallCard
              key={note.id}
              color={note.color}
              title={note.title}
              text={note.text}
            />
          );
        })}
        <Card
          className={`shadow ${styles.addNote}`}
          style={{
            backgroundColor: `lightgrey`,
          }}
        >
          <AiOutlinePlus className={`icon ${styles.plusIcon}`} size={80} />
        </Card>
      </Container>
    </Container>
  );
};

export default StickyWall;
