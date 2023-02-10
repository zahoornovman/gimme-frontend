import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { SignUpContainer } from "./styles";
import { TextButton, TextContainer } from "../../styles/MasterStyles";

import img_email from "../../images/email.svg";
import img_password from "../../images/password.svg";

import {
  loading,
  successfulSignIn,
  errorSignIn,
} from "../../slices/user/userSlice";

import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { store } from "../../store/store";

import { lastPage } from "../../slices/lastPageSignUpBeforeSignIn/lastPageSignUpBeforeSignInSlice";

function SignUp() {
  const [acceptanceTermsOfUse, setAcceptanceTermsOfUse] = useState("true");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpHandler = () => {
    let radioButtonYes = document.getElementById("agree");
    let radioButtonNo = document.getElementById("disagree");

    if (radioButtonYes.checked) {
      navigate("/signup/validation");
      console.log(`radio button: Yes ${radioButtonYes.checked}`);
    } else {
      setAcceptanceTermsOfUse("false");
      console.log(`radio button: No ${radioButtonNo.checked}`);
    }
  };

  return (
    <SignUpContainer>
      <Header></Header>

      <div className="contentSignUp">
        <div className="inputSignUp">
          {acceptanceTermsOfUse === "false" ? (
            <div className="messageSignUp fontSize">
              The terms of use have to be accpeted to create an account.
            </div>
          ) : (
            <></>
          )}
          <div className="inputField">
            <img src={img_email} />
            <input
              id="email"
              type="email"
              placeholder="your email address"
              className="fontSize"
            ></input>
          </div>
          <div className="termsOfUseAcceptance">
            <div className="fontSize">
              Do you agree with the{" "}
              <Link to={"../admin/termsofuse"}>terms of use</Link>?
            </div>
            <div className="termsOfUSeSelection">
              <input
                className="fontSize"
                type="radio"
                id="agree"
                name="termsOfUse"
                value="yes"
              />
              <label className="fontSize" for="agree">
                Yes
              </label>

              <input
                className="fontSize"
                type="radio"
                id="disagree"
                name="termsOfUse"
                value="no"
                defaultChecked
              />
              <label className="fontSize" for="disagree">
                No
              </label>
            </div>
          </div>

          <div className="buttonsSignUp">
            <TextButton onClick={signUpHandler} className="fontSize">
              Sign up
            </TextButton>
            <TextButton
              onClick={() => {
                navigate("/signin");
                dispatch(lastPage({
                  lastPage: "signUp"
                }))
              }
                }
              className="notSignUpButton fontSize"
            >
              Have an account
            </TextButton>
          </div>
        </div>
      </div>

      <FooterElement></FooterElement>
    </SignUpContainer>
  );
}

export default SignUp;
