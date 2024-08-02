"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SideMenu from "../components/SideMenu";
import styles from "./Main.module.scss";
import { FaBars } from "react-icons/fa";
import Calendar from "../components/Calendar";
import StickyWall from "../components/StickyWall";
import Today from "../components/Today";
import Upcoming from "../components/Upcoming";

const Main: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [showToday, setShowToday] = useState(false);
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showStickyWall, setShowStickyWall] = useState(false);

  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  return (
    <div className={`${styles.mainContentWrapper}`}>
      <div className={styles.menuToggle} onClick={handleShow}>
        <FaBars size={20} />
      </div>
      <SideMenu show={showMenu} handleClose={handleClose} />
      <div className={`${styles.mainContent}`}>
        {showToday && <Today />}
        {showUpcoming && <Upcoming />}
        {showCalendar && <Calendar />}
        {showStickyWall && <StickyWall />}
      </div>
    </div>
  );
};

export default Main;
