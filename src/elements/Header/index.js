import img_menu from "../../images/menu.svg";
import { TextButton, Header1 } from "../../styles/MasterStyles";
import { HeaderContainer } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Menu from "../Menu";
import { signOut } from "../../slices/user/userSlice";
import SearchOffers from "../SearchOffers";
import SearchRequests from "../SearchRequests";

let date = new Date();
let hour = date.getHours();

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userFirstname = useSelector((state) => state.user.first_name);
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
        {path === "/signin" ||
        path === "/passwordreset" ||
        path === "/signup" ||
        path === "/signup/validation" ? (
          <></>
        ) : (
          <img
            className="menuButton"
            onMouseOver={handleMouseOverMenu}
            src={img_menu}
          />
        )}

        <SearchOffers/>

        {isHoveringMenu && (
          <div onMouseLeave={handleMouseOutMenu}>
            <Menu></Menu>
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
      
      {/* <div className="secondLine">
        {hour < 12 ? (
          userFirstname === "NoNa" ? (
            <Header1 className="fontSize">Good morning!</Header1>
          ) : (
            <Header1 className="fontSize">{`Good morning ${userFirstname}!`}</Header1>
          )
        ) : hour < 17 ? (
          userFirstname === "NoNa" ? (
            <Header1 className="fontSize">Good afternoon!</Header1>
          ) : (
            <Header1 className="fontSize">{`Good afternoon ${userFirstname}!`}</Header1>
          )
        ) : hour < 22 ? (
          userFirstname === "NoNa" ? (
            <Header1 className="fontSize">Good evening!</Header1>
          ) : (
            <Header1 className="fontSize">{`Good evening ${userFirstname}!`}</Header1>
          )
        ) : userFirstname === "NoNa" ? (
          <Header1 className="fontSize">Good night!</Header1>
        ) : (
          <Header1 className="fontSize">{`Good night ${userFirstname}!`}</Header1>
        )}
        {path === "/requests/all" ||
        path === "/requests/my" ||
        path === "/requests/new" ||
        path === "/requests/:id" ||
        path === "/requests/update/:id" ? (
          <SearchRequests />
        ) : (
          <SearchOffers />
        )}
        </div> */}
    </HeaderContainer>
  );
}


export default Header;
