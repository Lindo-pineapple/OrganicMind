"use client";
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import SideMenu from "../components/SideMenu";
import styles from "./Main.module.scss";
import { FaBars } from "react-icons/fa";
import Calendar from "../components/Calendar";
import StickyWall from "../components/StickyWall";
import Today from "../components/Today";
import Upcoming from "../components/Upcoming";

const Main: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  //page state
  const [currentPage, setCurrentPage] = useState('Today');

  function changePage(page: string){
    setCurrentPage(page);
  }

  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  return (
    <div className={`${styles.mainContentWrapper}`}>
      <div className={styles.menuToggle}>
        <Button
          variant="link"
          className={styles.openButton}
          onClick={handleShow}
        >
          <FaBars size={20} />
        </Button>
      </div>

      <SideMenu show={showMenu} handleClose={handleClose} changePage={changePage}/>

      <div className={`${styles.mainContent} ${showMenu ? styles.close : styles.open}`}>
        {currentPage == "Today" && <Today />}
        {currentPage == "Upcoming" && <Upcoming />}
        {currentPage == "Calendar" && <Calendar />}
        {currentPage == "StickyWall" && <StickyWall />}
      </div>
    </div>
  );
};

export default Main;
