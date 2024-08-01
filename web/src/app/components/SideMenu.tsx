import React, { useState, useEffect } from "react";
import { Offcanvas, Button, Form } from "react-bootstrap";
import {
  FaSearch,
  FaCog,
  FaSignOutAlt,
  FaArrowAltCircleRight,
  FaList,
  FaCalendarAlt,
  FaStickyNote,
  FaPlus,
  FaSquare,
  FaBars,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import styles from "@/styles/SideMenu.module.scss";

interface SideMenuProps {
  show: boolean;
  handleClose: () => void;
  listProps: {
    personalBadgeCount?: number;
    workBadgeCount?: number;
    list1BadgeCount?: number;
  };
}

const SideMenu: React.FC<SideMenuProps> = ({
  show,
  handleClose,
  listProps,
}) => {
  const router = useRouter();
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigateTo = (path: string) => {
    router.push(path);
    handleClose();
  };

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
          <FaBars size={24} />
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
          <h5 className={styles.sectionTitle}>Tasks</h5>
          <div className={styles.navGroup}>
            <Button
              variant="light"
              className={styles.navItem}
              onClick={() => navigateTo("/upcoming")}
            >
              <FaArrowAltCircleRight className={styles.navIcon} />
              <div className={styles.navText}>Upcoming</div>
              <span className={styles.badge}>12</span>
            </Button>
            <Button
              variant="light"
              className={styles.navItem}
              onClick={() => navigateTo("/today")}
            >
              <FaList className={styles.navIcon} />
              <div className={styles.navText}>Today</div>
              <span className={styles.badge}>5</span>
            </Button>
            <Button
              variant="light"
              className={styles.navItem}
              onClick={() => navigateTo("/calendar")}
            >
              <FaCalendarAlt className={styles.navIcon} />
              <div className={styles.navText}>Calendar</div>
            </Button>
            <Button
              variant="light"
              className={styles.navItem}
              onClick={() => navigateTo("/sticky-wall")}
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
          <h5 className={styles.sectionTitle}>Lists</h5>
          <div className={styles.navGroup}>
            <Button
              variant="light"
              className={styles.navItem}
              onClick={() => navigateTo("/personal")}
            >
              <FaSquare className={styles.navIcon} style={{ color: "red" }} />
              <div className={styles.navText}>Personal</div>
              <span className={styles.badge}>
                {listProps.personalBadgeCount || 3}
              </span>
            </Button>
            <Button
              variant="light"
              className={styles.navItem}
              onClick={() => navigateTo("/work")}
            >
              <FaSquare
                className={styles.navIcon}
                style={{ color: "lightblue" }}
              />
              <div className={styles.navText}>Work</div>
              <span className={styles.badge}>
                {listProps.workBadgeCount || 6}
              </span>
            </Button>
            <Button
              variant="light"
              className={styles.navItem}
              onClick={() => navigateTo("/list1")}
            >
              <FaSquare className={styles.navIcon} style={{ color: "gold" }} />
              <div className={styles.navText}>List1</div>
              <span className={styles.badge}>
                {listProps.list1BadgeCount || 1}
              </span>
            </Button>
            <Button
              variant="light"
              className={styles.navItem}
              onClick={() => navigateTo("/add-new-list")}
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
          <h5 className={styles.sectionTitle}>Tags</h5>
          <div className={styles.tagContainer}>
            <Button
              variant="light"
              className={styles.tag}
              onClick={() => navigateTo("/tag1")}
              style={{ backgroundColor: "lightblue" }}
            >
              Tag 1
            </Button>
            <Button
              variant="light"
              className={styles.tag}
              onClick={() => navigateTo("/tag2")}
              style={{ backgroundColor: "pink" }}
            >
              Tag 2
            </Button>
            <Button
              variant="light"
              className={`${styles.tag} ${styles.addTag}`}
              onClick={() => navigateTo("/add-tag")}
            >
              + Add Tag
            </Button>
          </div>
        </div>
      </Offcanvas.Body>
      <div className={styles.menuFooter}>
        {/* Menu items */}
        <Button
          variant="light"
          className={styles.menuButton}
          onClick={() => navigateTo("/settings")}
        >
          <FaCog className={styles.menuIcon} /> Settings
        </Button>
        <Button
          variant="light"
          className={styles.menuButton}
          onClick={() => navigateTo("/signout")}
        >
          <FaSignOutAlt className={styles.menuIcon} /> Sign Out
        </Button>
      </div>
    </Offcanvas>
  );
};

export default SideMenu;
