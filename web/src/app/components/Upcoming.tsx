"use client";
import React from "react";
import { Container } from "react-bootstrap";

const Upcoming: React.FC = () => {
  return (
    <Container
      style={{ backgroundColor: "brown", width: "100%", height: "100%" }}
      fluid
      className={`container`}
    >
      <h1>Upcoming</h1>
    </Container>
  );
};

export default Upcoming;
