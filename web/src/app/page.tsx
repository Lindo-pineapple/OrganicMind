"use client";
import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/HomePage.module.scss";
import Link from "next/link";
import { IsAuthenticated, healthCheck } from "@/api/users"; // Make sure this path is correct
import { redirect } from "next/navigation";

const HomePage: React.FC = () => {

  useEffect(() => {
    const isNotAuth = IsAuthenticated();    
    if (!isNotAuth) {
      redirect("/main");
    }
  }, []);

  useEffect(() => {
    const performHealthCheck = async () => {
      try {
        const result = await healthCheck();
        console.log("Health Check Result:", result);
      } catch (error) {
        console.error("Health Check Error:", error);
      }
    };

    performHealthCheck();
  }, []);

  return (
    <Container fluid className={`p-0 m-0 vh-100 vw-100 ${styles.main}`}>
      <Row className="h-100 mx-0">
        <Col xs={12} md={6} className={`${styles.leftCard}`}>
          <div
            className={`w-100 h-100 d-flex align-items-center justify-content-center ${styles.bgImage}`}
          >
            <h1 className={`position-absolute top-0 start-0 p-3`}>
              <Link href={"/"} className={styles.leftCardTextTitle}>
                Organic
              </Link>
              <Link
                href={"/"}
                className={`position-absolute start-0 p-3 ${styles.leftCardText}`}
              >
                Mind
              </Link>
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
              <h1 className="mb-3 left-0">Productive Mind</h1>
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
