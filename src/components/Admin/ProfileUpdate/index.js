import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import {
  Header2,
  PopUp,
  PopUpButtonNo,
  PopUpButtonYes,
  TextButton,
} from "../../../styles/MasterStyles";
import { ContainerUpdateUserProfile } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateProfile } from "../../../slices/user/userSlice";
import { baseUrl } from "../../../baseurl";

function UpdateUserProfile() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSaveChanges = () => {
    var myHeaders = new Headers();
    //myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1NTIwMzUzLCJqdGkiOiI4MDJhZTIwOWZlZTA0NzUwYmVmMTZiY2E5MTFjZjRkNCIsInVzZXJfaWQiOjE5NzR9.astmhSWqikkfR7Hg_piMw70NpBn7onrR5-e8_-068us");
    myHeaders.append("Authorization", `Bearer ${user.acces}`);

    var formdata = new FormData();
    formdata.append("email", `${document.getElementById("email").value}`);
    formdata.append(
      "first_name",
      `${document.getElementById("first_name").value}`
    );
    formdata.append(
      "last_name",
      `${document.getElementById("last_name").value}`
    );
    formdata.append(
      "userprofile.location",
      `${document.getElementById("location").value}`
    );

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${baseUrl}/backend/api/user/me/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(
          updateProfile({
            email: result.email,
            first_name: result.first_name,
            last_name: result.last_name,
            location: result.userprofile.location,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        navigate("/admin/profile/changeserror");
      });
  };

  return (
    <ContainerUpdateUserProfile>
      <Header></Header>
      <Header2 className="fontSize">Update your profile</Header2>
      <div className="profileContentSection fontSize">
        <div className="profileItem">
          <span className="profileItemTitle">Username (unchangeable):</span>
          <span>{user.username}</span>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            defaultValue={user.email}
            className="profileItemInput fontSize"
          ></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="first_name">
            First name:
          </label>
          <input
            id="first_name"
            defaultValue={user.first_name}
            className="profileItemInput fontSize"
          ></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="last_name">
            Last name:
          </label>
          <input
            id="last_name"
            defaultValue={user.last_name}
            className="profileItemInput fontSize"
          ></input>
        </div>
        <div className="profileItem">
          <label className="profileItemTitle" htmlFor="location">
            Location:
          </label>
          <input
            id="location"
            defaultValue={user.location}
            className="profileItemInput fontSize"
          ></input>
        </div>
      </div>
      <div className="profileButtonContainer">
        <TextButton className="fontSize" onClick={handleSaveChanges}>
          Save changes
        </TextButton>
        <TextButton className="fontSize" onClick={() => navigate(-1)}>
          Drop changes
        </TextButton>
      </div>

      <FooterElement></FooterElement>
    </ContainerUpdateUserProfile>
  );
}

export default UpdateUserProfile;
