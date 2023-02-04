import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { SignInContainer } from "./styles";
import { TextButton, TextContainer } from "../../styles/MasterStyles";

import img_email from "../../images/email.svg"
import img_password from "../../images/password.svg"

import { baseUrl } from "../../baseurl";

import { loading, successfulSignIn, successfulGettingUserData, errorSignIn } from "../../features/user/userSlice"

import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { store } from "../../store/store";

function SignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const status = useSelector((state) => state.user.loading)
    const access = useSelector((state) => state.user.acces)
    const signInHandler = () => {
        dispatch(loading())
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "email": `${document.getElementById("email").value}`,
            "password": `${document.getElementById("password").value}`
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${baseUrl}/backend/api/auth/token/`, requestOptions)
            .then(response => response.json())
            .then(result => {

                dispatch(successfulSignIn({
                    id: result.id,
                    //email: result.email,
                    //first_name: result.first_name,
                    //last_name: result.last_name,
                    //username: result.username,
                    //location: "Chur, Switzerland",
                    refresh: result.refresh,
                    acces: result.access,
                }))
                //navigate(-1)
            })
            .then(() => {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${access}`);

                var formdata = new FormData();

                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    //body: formdata,
                    redirect: 'follow'
                };

                fetch(`${baseUrl}/backend/api/user/me/`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        dispatch(successfulGettingUserData({
                            //id: result.id,
                            email: result.email,
                            first_name: result.first_name,
                            last_name: result.last_name,
                            username: result.username,
                            location: result.userprofile.location,
                            //refresh: result.refresh,
                            //acces: result.access,
                        }))
                        navigate(-1)
                    })
                    .catch(
                        error => {dispatch(errorSignIn())
                        }
                    )
            }

            )
            .catch(
                error => dispatch(errorSignIn())
            )
    }

    return (

        <SignInContainer>
            <Header></Header>

            <div
                className="contentSignIn"
            >
                <div className="messageSignIn fontSize">
                    {
                        status === "true"
                            ?
                            <TextContainer
                                className="signInMessage"
                            >Loading. Please be patient. 😉</TextContainer>
                            :
                            status === "error"
                                ?
                                <TextContainer
                                    className="signInMessage"
                                >
                                    Either the email address doesn't exist or the password is spelt incorrectly. Please check and try again. 😊
                                </TextContainer>
                                :
                                <></>
                    }
                </div>
                <div className="inputSignIn">
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
                        className="inputField"
                    >
                        <img src={img_password} />
                        <input
                            id="password"
                            type="password"
                            placeholder="your password"
                            className="fontSize"
                        ></input>
                    </div>
                    <div
                        className="buttonsSignIn"
                    >
                        <TextButton
                            onClick={() => navigate('/passwordreset')}
                            className="notSignInButton fontSize"
                        >
                            Password forgotten
                        </TextButton>
                        <TextButton
                            onClick={signInHandler}
                            className="fontSize"
                        >
                            Sign in
                        </TextButton>
                        <TextButton
                            onClick={() => navigate('/signup')}
                            className="notSignInButton fontSize"
                        >
                            Create account
                        </TextButton>
                    </div>
                </div>

            </div>

            <FooterElement></FooterElement>
        </SignInContainer>
    );
}

export default SignIn;