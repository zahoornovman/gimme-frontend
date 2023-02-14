import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CogIcon } from "../../images/cog.svg";
import { ReactComponent as ChevronIcon } from "../../images/chevron.svg";

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
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
        My Profile
      </DropdownItem>
      <DropdownItem rightIcon={<ChevronIcon />}> All Offers</DropdownItem>
      <DropdownItem rightIcon={<ChevronIcon />}>All Requests</DropdownItem>
    </div>
  );
}
