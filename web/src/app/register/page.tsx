"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import styles from "../../styles/LoginPage.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegisterPage: React.FC = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  
  return (
    <Container fluid className={`p-0 m-0 vh-100 ${styles.main}`}>
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
              <h2 className="mb-3 left-0">Sign up</h2>
              <Form className="w-100 mb-3">
                <div className="mb-3">
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="YourName"
                  />
                </div>
                <div className="mb-3">
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="your@email.com"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 position-relative">
                  <Form.Control
                    type={passwordVisible ? "text" : "password"}
                    className="form-control"
                    placeholder="password"
                    id="exampleInputPassword1"
                  />
                  <button
                    type="button"
                    className="position-absolute end-0 top-50 translate-middle-y me-2 border-0 bg-transparent"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                  </button>
                </div>
                <div className="mb-3 position-relative">
                  <Form.Control
                    type={confirmPasswordVisible ? "text" : "password"}
                    className="form-control"
                    placeholder="confirm password"
                    id="exampleInputConfirmPassword1"
                  />
                  <button
                    type="button"
                    className="position-absolute end-0 top-50 translate-middle-y me-2 border-0 bg-transparent"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                  </button>
                </div>
              </Form>
              <Button
                variant="primary"
                className={`pt-2 ${styles.loginButton}`}
                href="/login"
                disabled={buttonDisabled}
              >
                Register{" "}
              </Button>

              <div className={`m-2 text-center d-flex justify-content-center align-items-center ${styles.lineContainer}`}>
                <hr className={`justify-content-center align-items-center ${styles.line}`} />
                <span className="m-3">or</span>
                <hr className={`justify-content-center align-items-center ${styles.line}`} />
              </div>

              <div className="w-100 text-center d-flex justify-content-center align-items-center">
                <Button variant="primary" className={`${styles.otherButton}`}>
                  Google
                </Button>
                <span style={{ color: "white" }}>sp</span>
                <Button variant="primary" className={`${styles.otherButton}`}>
                  Facebook
                </Button>
              </div>
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

export default RegisterPage;
