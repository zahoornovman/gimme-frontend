import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { SignInContainer } from "./styles";
import { TextButton, TextContainer } from "../../styles/MasterStyles";
import { loading as loadingMessage } from "../../elements/Statements/statements";
import img_email from "../../images/email.svg";
import img_password from "../../images/password.svg";
import img_home from "../../images/gimmeHome.png";

import { baseUrl } from "../../baseurl";

import {
  loading,
  successfulSignIn,
  successfulGettingUserData,
  errorSignIn,
} from "../../slices/user/userSlice";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lastPage } from "../../slices/lastPageSignUpBeforeSignIn/lastPageSignUpBeforeSignInSlice";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.loading);
  const lastPageBeforeSignIn = useSelector(
    (state) => state.lastPageBeforeSignIn.lastPage
  );
  const signInHandler = () => {
    dispatch(loading());
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      email: `${document.getElementById("email").value}`,
      password: `${document.getElementById("password").value}`,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseUrl}/backend/api/auth/token/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(
          successfulSignIn({
            id: result.id,
            refresh: result.refresh,
            acces: result.access,
          })
        );

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${result.access}`);

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(`${baseUrl}/backend/api/user/me/`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            dispatch(
              successfulGettingUserData({
                email: result.email,
                first_name: result.first_name,
                last_name: result.last_name,
                username: result.username,
                location: result.userprofile.location,
              })
            );
            if (lastPageBeforeSignIn === "signUp") {
              navigate(-2);
              dispatch(
                lastPage({
                  lastPage: "notSignUp",
                })
              );
            } else {
              navigate(-1);
            }
          })
          .catch(() => {
            dispatch(errorSignIn());
          });
      })
      .catch(() => dispatch(errorSignIn()));
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      if (
        document.getElementById("email").value !== "" &&
        document.getElementById("password").value !== ""
      ) {
        signInHandler();
      }
    }
  };
  return (
    <><Header></Header>
    <SignInContainer>      
      <div className="contentSignIn">
        <div className="messageSignIn fontSize">
          {status === "true" ? (
            <TextContainer className="signInMessage">
              {loadingMessage}
            </TextContainer>
          ) : status === "error" ? (
            <TextContainer className="signInMessage">
              Either the email address doesn't exist or the password is spelt
              incorrectly. Please check and try again. 😊
            </TextContainer>
          ) : (
            <></>
          )}
        </div>
        <img className="gimmeLogo" src={img_home} alt="gimme_logo" />
        <div className="inputSignIn">
          <h2>Log into your account</h2>
          <div className="inputField">
            {/* <img src={img_email} /> */}
            <input
              id="email"
              type="email"
              placeholder="your email address"
              className="fontSize"
              onKeyDown={handleEnter}
            ></input>
          </div>
          <div className="inputField">
            {/* <img src={img_password} /> */}
            <input
              id="password"
              type="password"
              placeholder="your password"
              className="fontSize"
              onKeyDown={handleEnter}
            ></input>
          </div>
          <div className="buttonsSignIn">
            <TextButton onClick={signInHandler} className="signInCreateButton">
              Sign in
            </TextButton>
            <TextButton
              onClick={() => navigate("/signup")}
              className="signInCreateButton"
            >
              Create account
            </TextButton>
          </div>
          <div className="buttonPasswordReset">
            <a
              href=""
              onClick={() => navigate("/passwordreset")}
              className="notSignInButton fontSize"
            >
              Forgot Password
            </a>
          </div>
        </div>
      </div>

      
    </SignInContainer>
    <FooterElement></FooterElement>
    </>
  );
}

export default SignIn;
