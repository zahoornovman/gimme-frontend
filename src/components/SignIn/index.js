import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { SignInContainer } from "./styles";
import { TextButton } from "../../styles/MasterStyles";

import img_email from "../../images/email.svg"
import img_password from "../../images/password.svg"

import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const signInHandler = () => {
        window.alert("Sign in has been clicked!")
    }
    return (
        <SignInContainer>
            <Header></Header>
            <div
                className="contentSignIn"
            >
                <div
                    className="inputField"
                >
                    <img src={img_email} />
                    <input
                        id="email"
                        type="email"
                        placeholder="your email address"
                    ></input>
                </div>
                <div
                    className="inputField"
                >
                    <img src={img_password} />
                    <input
                        id="password"
                        type="password"
                        placeholder="your password"
                    ></input>
                </div>
                <div
                    className="buttonsSignIn"
                >
                    <TextButton
                    onClick={()=> navigate('/passwordreset')}
                    >
                        Password forgotten
                    </TextButton>
                    <TextButton
                    onClick={signInHandler}>
                        Sign in
                    </TextButton>
                </div>
            </div>
            <FooterElement></FooterElement>
        </SignInContainer>
    );
}

export default SignIn;