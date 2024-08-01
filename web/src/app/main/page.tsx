"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SideMenu from "../components/SideMenu";
import styles from "@/styles/Stickywall.module.scss";
import { FaBars } from "react-icons/fa";

const Main: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  return (
    <div className={styles.mainContentWrapper}>
      {/* Menu toggle button */}
      <div className={styles.menuToggle} onClick={handleShow}>
        <FaBars size={20} />
      </div>

      <SideMenu show={showMenu} handleClose={handleClose} listProps={{
              personalBadgeCount: 5,
              workBadgeCount: 10,
              list1BadgeCount: 3
          }} />

      <Container fluid className={`${styles.mainContent}`}>
        <h1>Sticky Wall</h1>
        {/* Content goes here */}
      </Container>
    </div>
  );
};

export default Main;
