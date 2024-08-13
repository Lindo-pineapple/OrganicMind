"use client";
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form, Tooltip, OverlayTrigger } from "react-bootstrap";
import styles from "../../styles/LoginPage.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { redirect, useRouter } from "next/navigation";
import { IsAuthenticated, LoginUser } from '@/api/users';

const LoginPage: React.FC = () => {

  useEffect(() => {
    const isNotAuth = IsAuthenticated();    
    if (!isNotAuth) {
      redirect("/main");
    }
  }, []);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const router = useRouter();
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameVar = e.target.value;
    setName(nameVar);
    setNameError(nameVar.length < 2);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordVar = e.target.value;
    setPassword(passwordVar);
    setPasswordError(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(passwordVar));
  };

  const validateForm = () => {
    const isNameValid = name.length >= 2;
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    return isNameValid && isPasswordValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    let regUser: any | boolean = await LoginUser(name, password);

    if (regUser !== false) {
      if (passwordInputRef.current) passwordInputRef.current.value = "";
      setPassword("");
      if (nameInputRef.current) nameInputRef.current.value = "";
      setName("");
      router.push("/main");
    } else {
      alert('Login failed');
      if (passwordInputRef.current) passwordInputRef.current.value = "";
      setPassword("");
      if (nameInputRef.current) nameInputRef.current.value = "";
      setName("");
    }
  };

  const renderTooltip = (message: string) => (
    <Tooltip id="button-tooltip">
      {message}
    </Tooltip>
  );

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
              <h2 className="mb-3 left-0">Sign in</h2>
              <Form className="w-100 mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <OverlayTrigger
                    placement="left"
                    overlay={renderTooltip("Please enter a valid email address")}
                  >
                    <Form.Control
                      type="email"
                      className={`form-control ${nameError ? 'border-danger' : ''}`}
                      id="exampleInputEmail1"
                      placeholder="your@email.com"
                      aria-describedby="emailHelp"
                      onChange={handleName}
                      ref={nameInputRef}
                      value={name}
                    />
                  </OverlayTrigger>
                </div>
                <div className="mb-3 position-relative">
                  <OverlayTrigger
                    placement="left"
                    overlay={renderTooltip("Password must be 8-16 characters long and include uppercase, lowercase, number, and special character")}
                  >
                    <Form.Control
                      type={passwordVisible ? "text" : "password"}
                      className={`form-control ${passwordError ? 'border-danger' : ''}`}
                      placeholder="password"
                      id="exampleInputPassword1"
                      onChange={handlePassword}
                      ref={passwordInputRef}
                      value={password}
                    />
                  </OverlayTrigger>
                  <button
                    type="button"
                    className="position-absolute end-0 top-50 translate-middle-y me-2 border-0 bg-transparent"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                    />
                  </button>
                </div>
                <Button
                  variant="primary"
                  className={`pt-2 ${styles.loginButton}`}
                  type="submit"
                  disabled={!validateForm()} // Disable button if form is invalid
                >
                  Sign in
                </Button>
              </Form>
              <div
                className={`m-2 text-center d-flex justify-content-center align-items-center ${styles.lineContainer}`}
              >
                <hr
                  className={`justify-content-center align-items-center ${styles.line}`}
                />
                <span className="m-3">or</span>
                <hr
                  className={`justify-content-center align-items-center ${styles.line}`}
                />
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