import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import styles from "../../styles/LoginPage.module.scss";

const LoginPage: React.FC = () => {
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
              <h2 className="mb-3 left-0">Sign in</h2>
              <Form className="w-100 mb-3">
                <div className="mb-3">
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="your@email.com"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <Form.Control
                    type="password"
                    className="form-control"
                    placeholder="password"
                    id="exampleInputPassword1"
                  />
                </div>
              </Form>
              <Button
                variant="primary"
                className={`pt-2 ${styles.loginButton}`}
                href="/login"
              >
                Sign in{" "}
              </Button>
              <div className="m-3 text-center d-flex justify-content-center align-items-center">
                <hr className={`${styles.line}`} />
                or
                <hr className={`${styles.line}`} />
              </div>
              <div className="w-100 text-center d-flex justify-content-center align-items-center">
                <Button
                  variant="primary"
                  className={`${styles.otherButton}`}
                >
                  Google
                </Button>
                <span style={{color: "white"}}>sp</span>
                <Button
                  variant="primary"
                  className={`${styles.otherButton}`}
                >
                  Facebook
                </Button>
              </div>
              <div className="mt-3 text-center">
                Don't have an account?{" "}
                <a className={`${styles.link}`} href="/register">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
