import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CogIcon } from "../../images/cog.svg";
import { ReactComponent as ChevronIcon } from "../../images/chevron.svg";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function Menu2(props) {
  const status = useSelector((state) => state.user.loading);
  const navigate = useNavigate();

  return (
    <div>
      <DropdownMenu />
    </div>
  );
}

export default Menu2;

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main"); // offers, requests
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

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={250}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem rightIcon={<ChevronIcon />}>My Profile</DropdownItem>
          <DropdownItem rightIcon={<ChevronIcon />} goToMenu="offers">
            Offers
          </DropdownItem>
          <DropdownItem rightIcon={<ChevronIcon />} goToMenu="requests">
            Requests
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "offers"}
        unmountOnExit
        timeout={250}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem goToMenu="main"> Go Back</DropdownItem>
          <DropdownItem> All Offers</DropdownItem>
          <DropdownItem> My Offers</DropdownItem>
          <DropdownItem>Create New Offer</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "requests"}
        unmountOnExit
        timeout={250}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem goToMenu="main"> Go Back</DropdownItem>
          <DropdownItem> All Requests</DropdownItem>
          <DropdownItem> My Requests</DropdownItem>
          <DropdownItem>Create New Request</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
