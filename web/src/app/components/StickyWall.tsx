"use client";
import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import styles from "@/styles/StickyWall.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const StickyWall = (props: { notes: NoteType[]; menuOpen: boolean }) => {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container
      fluid
      className={`p-0 vh-90 vw-100 container wall ${
        props.menuOpen ? styles.open : styles.close
      }`}
    >
      <h1 className={`title b ${styles.title}`}>
        Sticky Wall
        <FaPlus className={`icon ${styles.addIcon}`} color="grey" size={20} />
      </h1>
      {!isTabletOrMobile ? (
        <Container fluid className={`container ${styles.cardContainer}`}>
          {props.notes.map((note, index) => {
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
      ) : (
        <Container fluid className={`${styles.cardContainer}`}>
          {props.notes.map((note, index) => {
            return (
              <>
                {index == 0 && (
                  <div className={`container ${styles.firstcardContainer}`}>
                    <Card
                      className={`shadow ${styles.cardBox}`}
                      style={{ backgroundColor: `${note.color}` }}
                    >
                      <Card.Body className={`${styles.cardBody}`}>
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Text>
                          <pre
                            style={{ width: "100%", whiteSpace: "pre-wrap" }}
                          >
                            {note.text}
                          </pre>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                )}
                {index !== 0 && (
                  <div style={{display: "flex", flexDirection: "row"}} className={`flex row ${styles.secondcardContainer}`}>
                    <Card
                      className={`shadow ${styles.cardBoxSecond} col column`}
                      style={{ backgroundColor: `${note.color}` }}
                    >
                      <Card.Body className={`${styles.cardBody}`}>
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Text>
                          <pre
                            style={{ width: "100%", whiteSpace: "pre-wrap" }}
                          >
                            {note.text}
                          </pre>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                )}
              </>
            );
          })}
          <div className={`shadow ${styles.addCardBox}`}>
            <AiOutlinePlus className={`icon ${styles.plusIcon}`} size={80} />
          </div>
        </Container>
      )}
    </Container>
  );
};

export default StickyWall;
