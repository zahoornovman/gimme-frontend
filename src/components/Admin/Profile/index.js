import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import {
  Header2,
  PopUp,
  PopUpButtonNo,
  PopUpButtonYes,
  TextButton,
} from "../../../styles/MasterStyles";
import { ContainerUserProfile } from "./sytles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signOut } from "../../../slices/user/userSlice";
import { baseUrl } from "../../../baseurl";

function Profile() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDeletedClicked, setIsDeletedClicked] = useState(false);

  const deleteHandler = () => {
    setIsDeletedClicked(true);
  };
  const handlerNoDelete = () => {
    setIsDeletedClicked(false);
  };
  const handlerYesDelete = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.acces}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = "";

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${baseUrl}/backend/api/user/me/`, requestOptions)
      .then((response) => {

        if (response.status < 300) {
          dispatch(signOut());
          navigate("/");
        }
        else {
          navigate("/admin/profile/deleteerror");
        }

      })
      .catch(() => {
        navigate("/admin/profile/deleteerror");
      });
  };

  return (
    <><Header></Header>
    <ContainerUserProfile>
      
      <Header2>Your profile</Header2>
      <div className="profileContentSection">
        <div className="profileItem">
          <span className="profileItemTitle">Username:</span>
          <span>{user.username}</span>
        </div>
        <div className="profileItem">
          <span className="profileItemTitle">Email:</span>
          <span>{user.email}</span>
        </div>
        <div className="profileItem">
          <span className="profileItemTitle">First name:</span>
          <span>{user.first_name}</span>
        </div>
        <div className="profileItem">
          <span className="profileItemTitle">Last name:</span>
          <span>{user.last_name}</span>
        </div>
        <div className="profileItem">
          <span className="profileItemTitle">Location:</span>
          <span>{user.location}</span>
        </div>
      </div>

      {isDeletedClicked ? (
        <PopUp className="popUpProfileDelete">
          <div>Do you really want to leave us?</div>
          <div className="popUpButtonSection">
            <PopUpButtonYes onClick={handlerNoDelete}>
              No
            </PopUpButtonYes>
            <PopUpButtonNo onClick={handlerYesDelete}>
              Yes
            </PopUpButtonNo>
          </div>
        </PopUp>
      ) : (
        <div className="profileButtonContainer">
          <TextButton
            onClick={() => navigate("/passwordreset")}
            className="resetButton"
          >
            Reset password
          </TextButton>
          <TextButton
            onClick={() => navigate("/admin/profile/update")}
            className="updateButton"
          >
            Update your profile
          </TextButton>
          <TextButton className="deleteButton" onClick={deleteHandler}>
            Delete your profile
          </TextButton>
        </div>
      )}

      
    </ContainerUserProfile>
    <FooterElement></FooterElement>
    </>
  );
}

export default Profile;
