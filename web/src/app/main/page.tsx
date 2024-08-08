"use client";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import SideMenu from "../components/SideMenu";
import styles from "./Main.module.scss";
import { FaBars } from "react-icons/fa";
import Calendar from "../components/Calendar";
import StickyWall from "../components/StickyWall";
import Today from "../components/Today";
import Upcoming from "../components/Upcoming";
import { IsAuthenticated } from "@/api/users";
import { redirect } from "next/navigation";

const Main: React.FC = () => {
  useEffect(() => {
    const isNotAuth = IsAuthenticated();    
    if (isNotAuth) {
      redirect("/login");
    }
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const notes: NoteType[] = [
    {
      title: "Social Media",
      color: "yellow",
      text: "- Plan social content\n- Build content calendar\n- Plan promotion and distribution",
      id: 0,
    },
    {
      title: "Content Strategy",
      color: "lightblue",
      text: "Would need time to get insights (goals, personals, budget, audits), but adter, it would be good to focus on assembling my team (start with SEO specialist, then perhaps an email marketer?). Also need to brainstorm on tooling.",
      id: 1,
    },
    {
      title: "Email A/B Tests",
      color: "pink",
      text: "- Subject lines\n- Sender\n- CTA\n- Sending Times",
      id: 2,
    },
    {
      title: "Banner Ads",
      color: "peachpuff",
      text: "Notes from the workshop:\n- Sizing matters\n- Choose distinctive imagery\n- The landing page must match the display ad",
      id: 3,
    },
  ];

  //page state
  const [currentPage, setCurrentPage] = useState("Today");

  function changePage(page: string) {
    setCurrentPage(page);
  }

  const handleShow = () => setShowMenu(true);
  const handleClose = () => setShowMenu(false);

  return (
    <div className={`p-0 m-0 vh-100 vw-100 ${styles.mainContentWrapper}`}>
      <div className={styles.menuToggle}>
        <Button
          variant="link"
          className={styles.openButton}
          onClick={handleShow}
        >
          <FaBars size={20} />
        </Button>
      </div>

      <SideMenu
        show={showMenu}
        handleClose={handleClose}
        changePage={changePage}
      />

      <div
        className={`${styles.mainContent} ${
          showMenu ? styles.close : styles.open
        }`}
      >
        {currentPage == "Today" && <Today badge={5} />}
        {currentPage == "Upcoming" && <Upcoming />}
        {currentPage == "Calendar" && <Calendar />}
        {currentPage == "StickyWall" && <StickyWall notes={notes} />}
      </div>
    </div>
  );
};

export default Main;
