"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import styles from "../../styles/LoginPage.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { RegisterUser } from "@/api/users";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const router = useRouter();

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(value.length < 3);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(value)
    );
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError(value !== password);
  };

  useEffect(() => {
    validateForm();
  }, [username, email, password, confirmPassword]); // Trigger validation on any field change

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validateForm = () => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(
        password
      );
    const passwordsMatch = password === confirmPassword;
    const allFieldsValid =
      username.length >= 3 && emailValid && passwordValid && passwordsMatch;
    setButtonDisabled(!allFieldsValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Assuming RegisterUser is a function that you need to implement or import
    let regUser: any | boolean = await RegisterUser(username, email, password);
    console.log(regUser);

    if (regUser !== false) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  };

  const renderTooltip = (message: string) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
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
              <h2 className="mb-3 left-0">Sign up</h2>
              <Form className="w-100 mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <OverlayTrigger
                    placement="left"
                    overlay={renderTooltip(
                      "Please enter your name (more than 2 characters)"
                    )}
                  >
                    <Form.Control
                      type="text"
                      className={`form-control ${
                        usernameError ? "border-danger" : ""
                      }`}
                      placeholder="YourName"
                      onChange={handleUsername}
                      value={username}
                    />
                  </OverlayTrigger>
                </div>
                <div className="mb-3">
                  <OverlayTrigger
                    placement="left"
                    overlay={renderTooltip(
                      "Please enter a valid email address"
                    )}
                  >
                    <Form.Control
                      type="email"
                      className={`form-control ${
                        emailError ? "border-danger" : ""
                      }`}
                      placeholder="your@email.com"
                      onChange={handleEmail}
                      value={email}
                    />
                  </OverlayTrigger>
                </div>
                <div className="mb-3 position-relative">
                  <OverlayTrigger
                    placement="left"
                    overlay={renderTooltip(
                      "Password must be 8-16 characters long and include uppercase, lowercase, number, and special character"
                    )}
                  >
                    <Form.Control
                      type={passwordVisible ? "text" : "password"}
                      className={`form-control ${
                        passwordError ? "border-danger" : ""
                      }`}
                      placeholder="password"
                      onChange={handlePassword}
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
                <div className="mb-3 position-relative">
                  <OverlayTrigger
                    placement="left"
                    overlay={renderTooltip("Passwords must match")}
                  >
                    <Form.Control
                      type={confirmPasswordVisible ? "text" : "password"}
                      className={`form-control ${
                        confirmPasswordError ? "border-danger" : ""
                      }`}
                      placeholder="confirm password"
                      onChange={handleConfirmPassword}
                      value={confirmPassword}
                    />
                  </OverlayTrigger>
                  <button
                    type="button"
                    className="position-absolute end-0 top-50 translate-middle-y me-2 border-0 bg-transparent"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={confirmPasswordVisible ? faEyeSlash : faEye}
                    />
                  </button>
                </div>
                <Button
                  variant="primary"
                  className={`pt-2 ${styles.loginButton}`}
                  type="submit"
                  disabled={buttonDisabled} // Disable button if form is invalid
                >
                  Register
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
