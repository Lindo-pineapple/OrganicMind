import React from "react";
import Card from "react-bootstrap/Card";
import styles from "@/styles/Card.module.scss";

const WallCard = (props: { color: string; title: string; text: string }) => {
  return (
    <Card
      className={`shadow ${styles.cardContainer}`}
      style={{ backgroundColor: `${props.color}` }}
    >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <pre style={{ width: "100%", whiteSpace: "pre-wrap" }}>
            {props.text}
          </pre>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WallCard;
