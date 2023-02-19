import img_menu from "../../images/menu.svg";
import { TextButton } from "../../styles/MasterStyles";
import { HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Menu2 from "../Menu2";
import { signOut } from "../../slices/user/userSlice";
import SearchRequests from "../SearchRequests";
import SearchOffers from "../SearchOffers";
import img_home from "../../images/gimmeHome.png";
import img_chevronDown from "../../images/chevronDoubleDown.svg";
import img_chevronUp from "../../images/chevronDoubleUp.svg";

import { FormattedMessage } from "react-intl";

//languages
import { LOCALES } from "../../i18n/locales";

//slice
import { setLanguageInSlice } from "../../slices/language/languageSlice";

//selectors
import { selectLanguage } from "../../store/selectors/selectors";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.loading);
  const user = useSelector((state) => state.user);
  const storeLanguage = useSelector(selectLanguage);

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

  // Languages
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "Deutsche", code: LOCALES.GERMAN },
  ];

  //language local state
  const [language, setLanguage] = useState("en-US");

  //useEffect to be triggered when language is changed
  useEffect(() => {
    console.log("Entering use Effect for language on welcome page");
    setLanguage(storeLanguage);
    console.log(language);
    console.log(storeLanguage);
  }, [storeLanguage]);

  //changing language handled here
  const handleLanguageChange = (event) => {
    console.log(event.currentTarget.value);
    dispatch(setLanguageInSlice(event.currentTarget.value));
  };

  let path = window.location.pathname;
  return (
    <HeaderContainer>
      <div className="firstLine">
        <div className="headerLeft">
          <div>
            <img
              className="imageHome"
              onClick={() => navigate("/")}
              src={img_home}
              alt=""
            />
          </div>
          {/* Searchbar display based on the page being displayed */}
          <div className="searchBarPlacement">
            {path === "/requests/all" ||
            path === "/requests/searchResults" ||
            path === "/requests/my" ||
            path === "/requests/new" ||
            path === "/requests/:id" ||
            path === "/requests/update/:id" ? (
              <SearchRequests />
            ) : (
              <SearchOffers />
            )}
          </div>
        </div>

        <div className="headerRight">
          {status === "completed" ? (
            <div className="userloggedIn">
              <TextButton className="buttonSignIn" onClick={handleSignOut}>
                <FormattedMessage id="signOut" />
              </TextButton>
            </div>
          ) : path === "/signin" ||
            path === "/passwordreset" ||
            path === "/signup" ||
            path === "/signup/validation" ? (
            <></>
          ) : (
            <div className="userNotLoggedIn">
              <TextButton
                onClick={() => navigate("/signin")}
                className="buttonSignIn"
              >
                <FormattedMessage id="signIn" />
              </TextButton>
              <TextButton
                className="buttonSignIn"
                onClick={() => navigate("/signup")}
              >
                <FormattedMessage id="signUp" />
              </TextButton>
            </div>
          )}

          {isHoveringMenu && (
            <div onMouseLeave={handleMouseOutMenu}>
              <Menu2 />
            </div>
          )}

          {path === "/signin" ||
          path === "/passwordreset" ||
          path === "/signup" ||
          path === "/signup/validation" ? (
            <></>
          ) : user.first_name === "NoNa" ? (
            isHoveringMenu ? (
              <div className="menuArea">
                <div onClick={handleMouseOutMenu}>
                  <FormattedMessage id="myGimme" />
                </div>
                <img
                  className="menuButton"
                  onClick={handleMouseOutMenu}
                  src={img_chevronUp}
                />
              </div>
            ) : (
              <div className="menuArea">
                <div onClick={handleMouseOverMenu}>
                  <FormattedMessage id="myGimme" />
                </div>
                <img
                  className="menuButton"
                  onClick={handleMouseOverMenu}
                  src={img_chevronDown}
                />
              </div>
            )
          ) : isHoveringMenu ? (
            <div className="menuArea">
              <div onClick={handleMouseOutMenu}>{user.username}</div>
              <img
                className="menuButton"
                onClick={handleMouseOutMenu}
                src={img_chevronUp}
              />
            </div>
          ) : (
            <div className="menuArea">
              <div onClick={handleMouseOverMenu}>{user.username}</div>
              <img
                className="menuButton"
                onClick={handleMouseOverMenu}
                src={img_chevronDown}
              />
            </div>
          )}
          <div className="switcher">
            {/* Language switch dropdown here */}
            <select onChange={handleLanguageChange} value={storeLanguage}>
              {languages.map(({ name, code }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
