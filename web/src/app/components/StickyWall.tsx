"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/StickyWall.module.scss";
import WallCard from "./WallCard";

const StickyWall = (props: { notes: NoteType[] }) => {
  return (
    <Container fluid className={`p-0 m-4 vh-90 vw-100 container wall`}>
      <h1>Sticky Wall</h1>
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
      </Container>
    </Container>
  );
};

export default StickyWall;
