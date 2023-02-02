import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2, PopUp, PopUpButtonNo, PopUpButtonYes, TextButton } from "../../../styles/MasterStyles";
import { ContainerUpdateUserProfile } from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { signOut } from "../../../features/user/userSlice";

function UpdateUserProfile() {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    return (
        <ContainerUpdateUserProfile>
            <Header></Header>
            <Header2
                className="fontSize"
            >Update your profile</Header2>
            <div
                className="profileContentSection fontSize"
            >
                <div
                    className="profileItem"
                >
                    <span
                        className="profileItemTitle"
                    >
                        User number:
                    </span>
                    <span>{user.id}</span>
                </div>
                <div
                    className="profileItem"
                >
                    <span
                        className="profileItemTitle"
                    >
                        Username:
                    </span>
                    <span>{user.username}</span>
                </div>
                <div
                    className="profileItem"
                >
                    <label
                        className="profileItemTitle"
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        defaultValue={user.email}
                        className="fontSize"
                    ></input>
                </div>
                <div
                    className="profileItem"
                >
                    <label
                        className="profileItemTitle"
                        htmlFor="first_name"
                    >
                        First name:
                    </label>
                    <input
                        id="first_name"
                        defaultValue={user.first_name}
                        className="fontSize"
                    ></input>
                </div>
                <div
                    className="profileItem"
                >
                    <label
                        className="profileItemTitle"
                        htmlFor="last_name"
                    >
                        Last name:
                    </label>
                    <input
                        id="last_name"
                        defaultValue={user.last_name}
                        className="fontSize"
                    ></input>
                </div>
                <div
                    className="profileItem"
                >
                    <label
                        className="profileItemTitle"
                        htmlFor="location"
                    >
                        Location:
                    </label>
                    <input
                        id="location"
                        defaultValue={user.location}
                        className="fontSize"
                    ></input>
                </div>
                <div>
                    <TextButton
                        className="fontSize"
                    >
                        Save changes
                    </TextButton>
                    <TextButton
                        className="fontSize"
                    >
                        Drop changes
                    </TextButton>
                </div>
            </div>



            <FooterElement></FooterElement>
        </ContainerUpdateUserProfile>
    );
}

export default UpdateUserProfile;