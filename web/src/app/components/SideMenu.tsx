import React, { useState, useEffect } from "react";
import { Offcanvas, Button, Form } from "react-bootstrap";
import {
  FaSearch,
  FaSignOutAlt,
  FaList,
  FaCalendarAlt,
  FaStickyNote,
  FaPlus,
  FaSquare,
  FaBars,
  FaSlidersH,
} from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "@/styles/SideMenu.module.scss";

interface SideMenuProps {
  show: boolean;
  handleClose: () => void;
  changePage: (page: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  show,
  handleClose,
  changePage,
}) => {
  const router = useRouter();
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [active, setActive] = useState("Today");

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth <= 768 || window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="start"
      className={styles.sideMenu}
      style={{ backdropFilter: "none" }}
      backdrop={false}
    >
      <Offcanvas.Header>
        <Offcanvas.Title>Menu</Offcanvas.Title>
        <Button
          variant="link"
          className={styles.closeButton}
          onClick={handleClose}
        >
          {isTabletOrMobile ? (
            <IoClose className={`${styles.closeButton}`} size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.offcanvasBody}>
        {/* Search bar */}
        <div className={styles.searchBar}>
          <Form.Control
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>

        {/* Tasks Section */}
        <div className={styles.navSection}>
          <h5 className={styles.sectionTitle}>TASKS</h5>
          <div className={styles.navGroup}>
            <Button
              variant="light"
              onClick={() => {
                changePage("Upcoming");
                setActive("Upcoming");
              }}
              className={`${styles.navItem} ${
                active == "Upcoming" ? styles.active : ""
              }`}
              active={active == "Upcoming"}
            >
              <FiChevronsRight size={22} style={{ marginRight: 5 }} />
              <div className={styles.navText}>Upcoming</div>
              <span
                className={`${styles.badge} ${
                  active == "Upcoming" ? styles.active : ""
                }`}
              >
                12
              </span>
            </Button>

            <Button
              variant="light"
              className={`${styles.navItem} ${
                active == "Today" ? styles.active : ""
              }`}
              onClick={() => {
                changePage("Today");
                setActive("Today");
              }}
              active={active == "Today"}
            >
              <FaList className={styles.navIcon} />
              <div className={styles.navText}>Today</div>
              <span
                className={`${styles.badge} ${
                  active == "Today" ? styles.active : ""
                }`}
              >
                5
              </span>
            </Button>

            <Button
              variant="light"
              className={`${styles.navItem} ${
                active == "Calendar" ? styles.active : ""
              }`}
              onClick={() => {
                changePage("Calendar");
                setActive("Calendar");
              }}
              active={active == "Calendar"}
            >
              <FaCalendarAlt className={styles.navIcon} />
              <div className={styles.navText}>Calendar</div>
            </Button>

            <Button
              variant="light"
              className={`${styles.navItem} ${
                active == "StickyWall" ? styles.active : ""
              }`}
              onClick={() => {
                changePage("StickyWall");
                setActive("StickyWall");
              }}
              active={active == "StickyWall"}
            >
              <FaStickyNote className={styles.navIcon} />
              <div className={styles.navText}>Sticky Wall</div>
            </Button>
          </div>
        </div>

        <hr
          className={`justify-content-center align-items-center ${styles.line}`}
        />

        {/* Lists Section */}
        <div className={styles.navSection}>
          <h5 className={styles.sectionTitle}>LISTS</h5>
          <div className={styles.navGroup}>
            <Button
              variant="light"
              className={`${styles.navItem} ${
                active == "Personal" ? styles.active : ""
              }`}
              onClick={() => {
                changePage("Filters");
                setActive("Personal");
              }}
              active={active == "Personal"}
            >
              <FaSquare className={styles.navIcon} style={{ color: "red" }} />
              <div className={styles.navText}>Personal</div>
              <span
                className={`${styles.badge} ${
                  active == "Personal" ? styles.active : ""
                }`}
              >
                3
              </span>
            </Button>

            <Button
              variant="light"
              className={`${styles.navItem} ${
                active == "Work" ? styles.active : ""
              }`}
              onClick={() => {
                changePage("Filters");
                setActive("Work");
              }}
              active={active == "Work"}
            >
              <FaSquare
                className={styles.navIcon}
                style={{ color: "lightblue" }}
              />
              <div className={styles.navText}>Work</div>
              <span
                className={`${styles.badge} ${
                  active == "Work" ? styles.active : ""
                }`}
              >
                6
              </span>
            </Button>

            <Button
              variant="light"
              className={`${styles.navItem} ${
                active == "List1" ? styles.active : ""
              }`}
              onClick={() => {
                changePage("Filters");
                setActive("List1");
              }}
              active={active == "List1"}
            >
              <FaSquare className={styles.navIcon} style={{ color: "gold" }} />
              <div className={styles.navText}>List1</div>
              <span
                className={`${styles.badge} ${
                  active == "List1" ? styles.active : ""
                }`}
              >
                1
              </span>
            </Button>

            <Button
              variant="light"
              className={`${styles.navItem} ${
                active == "AddNew" ? styles.active : ""
              }`}
              onClick={() => {
                changePage("Filters");
                setActive("AddNew");
              }}
              active={active == "AddNew"}
            >
              <FaPlus className={styles.navIcon} />
              <div className={styles.navText}>Add New List</div>
            </Button>
          </div>
        </div>

        <hr
          className={`justify-content-center align-items-center ${styles.line}`}
        />

        {/* Tags Section */}
        <div className={styles.navSection}>
          <h5 className={styles.sectionTitle}>TAGS</h5>
          <div className={styles.tagContainer}>
            <Button
              variant="light"
              className={styles.tag}
              onClick={() => {
                changePage("Filters");
              }}
              style={{ backgroundColor: "lightblue" }}
            >
              Tag 1
            </Button>

            <Button
              variant="light"
              className={styles.tag}
              onClick={() => {
                changePage("Filters");
              }}
              style={{ backgroundColor: "pink" }}
            >
              Tag 2
            </Button>

            <Button
              variant="light"
              className={`${styles.tag} ${styles.addTag}`}
              onClick={() => {
                changePage("Filters");
              }}
            >
              + Add Tag
            </Button>
          </div>
        </div>
      </Offcanvas.Body>
      <div className={styles.menuFooter}>
        {/* Menu items */}
        {isTabletOrMobile && <hr className={`${styles.midLine}`} />}
        <Button
          variant="light"
          className={styles.menuButton}
          onClick={() => router.push("/settings")}
        >
          <FaSlidersH className={`${styles.menuIcon}`} /> Settings
        </Button>

        {isTabletOrMobile && <hr className={`${styles.bottomLine}`} />}

        <Button
          variant="light"
          className={`${styles.menuButton} ${styles.signOutButton} ${
            isTabletOrMobile ? styles.signOutMobile : ""
          }`}
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            router.push("/");
          }}
        >
          {!isTabletOrMobile && (
            <FaSignOutAlt className={styles.signOutMenuIcon} />
          )}{" "}
          <span className={styles.btnText}>Sign Out</span>
        </Button>
      </div>
    </Offcanvas>
  );
};

export default SideMenu;
