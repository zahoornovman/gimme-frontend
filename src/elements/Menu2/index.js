import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as ChevronRightIcon } from "../../images/chevronDoubleRight.svg";
import { ReactComponent as ChevronLeftIcon } from "../../images/chevronDoubleLeft.svg";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function Menu2() {
  return (
    <div>
      <DropdownMenu />
    </div>
  );
}

export default Menu2;

function DropdownMenu() {
  const status = useSelector((state) => state.user.loading);
  const navigate = useNavigate();

  //for different dynamic menus
  const [activeMenu, setActiveMenu] = useState("main"); // offers, requests

  //for menu transitioning
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  //each dropdown item has the below structure
  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  //rendering of the Dropdown Menu
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      {/* main menu dropdown */}
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          {status === "completed" && (
            <DropdownItem goToMenu={() => navigate("/admin/profile")}>
              My Profile
            </DropdownItem>
          )}
          <DropdownItem rightIcon={<ChevronRightIcon />} goToMenu="offers">
            Offers
          </DropdownItem>
          <DropdownItem rightIcon={<ChevronRightIcon />} goToMenu="requests">
            Requests
          </DropdownItem>
          <DropdownItem goToMenu={() => navigate("/admin/faq")}>
            FAQs
          </DropdownItem>
          <DropdownItem goToMenu={() => navigate("/admin/contact")}>
            Contact
          </DropdownItem>
          <DropdownItem goToMenu={() => navigate("/admin/termsofuse")}>
            Terms of use
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* Offers menu dropdown. Changes based on login */}
      <CSSTransition
        in={activeMenu === "offers"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<ChevronLeftIcon />} goToMenu="main">
            Go Back
          </DropdownItem>
          <DropdownItem goToMenu={() => navigate("/offers/all")}>
            All Offers
          </DropdownItem>
          {status === "completed" && (
            <DropdownItem goToMenu={() => navigate("/offers/my")}>
              My Offers
            </DropdownItem>
          )}
          {status === "completed" && (
            <DropdownItem goToMenu={() => navigate("/offers/new")}>
              Create New Offer
            </DropdownItem>
          )}
        </div>
      </CSSTransition>

      {/* Requests menu dropdown. Changes based on login */}
      <CSSTransition
        in={activeMenu === "requests"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<ChevronLeftIcon />} goToMenu="main">
            Go Back
          </DropdownItem>
          <DropdownItem goToMenu={() => navigate("/requests/all")}>
            All Requests
          </DropdownItem>
          {status === "completed" && (
            <DropdownItem goToMenu={() => navigate("/requests/my")}>
              My Requests
            </DropdownItem>
          )}
          {status === "completed" && (
            <DropdownItem goToMenu={() => navigate("/requests/new")}>
              Create New Request
            </DropdownItem>
          )}
        </div>
      </CSSTransition>
    </div>
  );
}
