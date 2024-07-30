import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/HomePage.module.scss";
import { useHref } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Container fluid className={`p-0 m-0 vh-100 ${styles.main}`}>
      <Row className="h-100 mx-0">
        <Col xs={12} md={6} className={`${styles.leftCard}`}>
          <div
            className={`w-100 h-100 d-flex align-items-center justify-content-center ${styles.bgImage}`}
          >
            <h1 className={`position-absolute top-0 start-0 p-3`}>
              <span className={styles.leftCardTextTitle}>Organic</span>
              <span
                className={`position-absolute start-0 p-3 ${styles.leftCardText}`}
              >
                Mind
              </span>
            </h1>
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className={`d-flex justify-content-center align-items-center p-3 ${styles.rightCard}`}
        >
          <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
              <h2 className="mb-3 left-0">Productive Mind</h2>
              <p className="mb-3">
                With only the features you need, Organic Mind is customized for
                individuals seeking a stress-free way to stay focused on their
                goals, projects, and tasks.
              </p>
              <Button
                variant="primary"
                className={`pt-2 ${styles.loginButton}`}
                href="/login"
              >
                Get Started{" "}
              </Button>
              <div className="mt-3 text-center">
                Already have an account?{" "}
                <a className={`${styles.link}`} href="/login">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
