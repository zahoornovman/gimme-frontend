import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import {
  Header2,
  PopUp,
  PopUpButtonNo,
  PopUpButtonYes,
  TextButton,
  TextContainer,
} from "../../styles/MasterStyles";
import { ContainerSignUpValidation } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateProfile } from "../../slices/user/userSlice";
import { baseUrl } from "../../baseurl";

function SignUpValidation() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [status, setStatus] = useState("codeSent");

  const handleCompleteSignUp = () => {
    let password = document.getElementById("password").value;
    let passwordRepeat = document.getElementById("passwordRepeat").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    let location = document.getElementById("location").value;
    let validationCode = document.getElementById("validationCode").value;

    console.log(location);

    if (password === passwordRepeat) {
      if (
        password === "" ||
        passwordRepeat === "" ||
        username === "" ||
        email === "" ||
        firstName === "" ||
        lastName === "" ||
        location === "" ||
        validationCode === ""
      ) {
        setStatus("emptyFields");
      } else {
        setStatus("loading");
        setTimeout(() => navigate("/signup/validation/error"), 10000);
      }
    } else {
      setStatus("passwordNotEqual");
    }
  };

  return (
    <ContainerSignUpValidation>
      <Header></Header>
      <Header2 className="fontSize">Just a step a head from swaping!</Header2>
      <div className="messageSignUp fontSize">
        {status === "loading" ? (
          <TextContainer>Loading. Please be patient. 😉</TextContainer>
        ) : status === "passwordNotEqual" ? (
          <TextContainer className="errorMessage">
            The password and and password repeat aren't equal. Please correct.
            😊
          </TextContainer>
        ) : status === "emptyFields" ? (
          <TextContainer className="errorMessage">
            Please fill in all missing fields. 😉
          </TextContainer>
        ) : (
          <TextContainer>Please complete the form.</TextContainer>
        )}
      </div>
      <div className="profileContentSection fontSize">
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="username">
            Username:
          </label>
          <input id="username" className="profileItemInput fontSize"></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="profileItemInput fontSize"
          ></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="profileItemInput fontSize"
          ></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="passwordRepeat">
            Password repeat:
          </label>
          <input
            type="password"
            id="passwordRepeat"
            className="profileItemInput fontSize"
          ></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="first_name">
            First name:
          </label>
          <input id="first_name" className="profileItemInput fontSize"></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="last_name">
            Last name:
          </label>
          <input id="last_name" className="profileItemInput fontSize"></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="location">
            Location:
          </label>
          <input id="location" className="profileItemInput fontSize"></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="validationCode">
            Validation code:
          </label>
          <input
            id="validationCode"
            className="profileItemInput fontSize"
          ></input>
        </div>
      </div>
      <div className="profileButtonContainer">
        <TextButton className="fontSize" onClick={handleCompleteSignUp}>
          Complete sign up
        </TextButton>
        <TextButton
          className="exitSignUp fontSize"
          onClick={() => navigate("/")}
        >
          Exit sign up
        </TextButton>
      </div>

      <FooterElement></FooterElement>
    </ContainerSignUpValidation>
  );
}

export default SignUpValidation;
