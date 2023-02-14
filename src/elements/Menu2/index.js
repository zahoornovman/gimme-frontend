import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CogIcon } from "../../images/cog.svg";
import { ReactComponent as ChevronIcon } from "../../images/chevron.svg";
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

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
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
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main"> Go Back</DropdownItem>
          <DropdownItem goToMenu={() => navigate("/offers/all")}>
            All Offers
          </DropdownItem>
          <DropdownItem goToMenu={() => navigate("/requests/my")}>
            My Offers
          </DropdownItem>
          <DropdownItem goToMenu={() => navigate("/requests/new")}>
            Create New Offer
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "requests"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main"> Go Back</DropdownItem>
          <DropdownItem goToMenu={() => navigate("/requests/all")}>
            All Requests
          </DropdownItem>
          <DropdownItem goToMenu={() => navigate("/requests/my")}>
            My Requests
          </DropdownItem>
          <DropdownItem goToMenu={() => navigate("/requests/new")}>
            Create New Request
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
