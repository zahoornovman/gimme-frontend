import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import {SignUpContainer} from "./styles"
import { TextButton, TextContainer } from "../../styles/MasterStyles";

import img_email from "../../images/email.svg"
import img_password from "../../images/password.svg"

import { loading, successfulSignIn, errorSignIn } from "../../features/user/userSlice"

import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { store } from "../../store/store";

function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const signUpHandler = () => {
        navigate('/signup/validation')
    }

    return (

        <SignUpContainer>
            <Header></Header>

            <div
                className="contentSignUp"
            >
                
                <div className="inputSignUp">
                    <div
                        className="inputField"
                    >
                        <img src={img_email} />
                        <input
                            id="email"
                            type="email"
                            placeholder="your email address"
                            className="fontSize"
                        ></input>
                    </div>
                    
                    <div
                        className="buttonsSignUp"
                    >
                        
                        <TextButton
                            onClick={signUpHandler}   
                            className="fontSize"                         
                            >
                            Sign up
                        </TextButton>
                        <TextButton
                            onClick={() => navigate('/signin')}
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