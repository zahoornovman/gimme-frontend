import img_menu from "../../images/menu.svg";
import { TextButton } from "../../styles/MasterStyles";
import { HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Menu2 from "../Menu2";
import { signOut } from "../../slices/user/userSlice";
import SearchRequests from "../SearchRequests";
import SearchOffers from "../SearchOffers";
import img_home from "../../images/home.svg";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.loading);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  //related to the menu
  const [isHoveringMenu, setIsHoveringMenu] = useState(false);

  const handleMouseOverMenu = () => {
    setIsHoveringMenu(true);
  };

  const handleMouseOutMenu = () => {
    setIsHoveringMenu(false);
  };
  let path = window.location.pathname;
  return (
    <HeaderContainer>
      <div className="firstLine">
        <img
          onClick={() => navigate("/")}
          className="imageHome"
          src={img_home}
          alt=""
        />
        {/* Searchbar display based on the page being displayed */}
        {path === "/requests/all" ||
        path === "/requests/my" ||
        path === "/requests/new" ||
        path === "/requests/:id" ||
        path === "/requests/update/:id" ? (
          <SearchRequests />
        ) : (
          <SearchOffers />
        )}
        {path === "/signin" ||
        path === "/passwordreset" ||
        path === "/signup" ||
        path === "/signup/validation" ? (
          <></>
        ) : (
          <img
            className="menuButton"
            onClick={handleMouseOverMenu}
            src={img_menu}
          />
        )}

        {isHoveringMenu && (
          <div onMouseLeave={handleMouseOutMenu}>
            <Menu2 />
          </div>
        )}
        {status === "completed" ? (
          <TextButton className="buttonSignIn" onClick={handleSignOut}>
            Sign out
          </TextButton>
        ) : path === "/signin" ||
          path === "/passwordreset" ||
          path === "/signup" ||
          path === "/signup/validation" ? (
          <></>
        ) : (
          <>
            <TextButton
              onClick={() => navigate("/signin")}
              className="buttonSignIn"
            >
              Sign in
            </TextButton>
            <TextButton
              className="buttonSignIn"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </TextButton>
          </>
        )}
      </div>
    </HeaderContainer>
  );
}

export default Header;
