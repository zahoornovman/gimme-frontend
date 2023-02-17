import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import {
  Header2,
  PopUp,
  PopUpButtonNo,
  PopUpButtonYes,
  TextButton,
  TextButtonDelete,
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
        } else {
          navigate("/admin/profile/deleteerror");
        }
      })
      .catch(() => {
        navigate("/admin/profile/deleteerror");
      });
  };

  return (
    <ContainerUserProfile>
      <Header></Header>
      <Header2 className="fontSize">Your profile</Header2>
      <div className="profileContentSection fontSize">
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
          <div className="fontSize">Do you really want to leave us?</div>
          <div className="popUpButtonSection">
            <PopUpButtonYes className="fontSize" onClick={handlerNoDelete}>
              No
            </PopUpButtonYes>
            <PopUpButtonNo className="fontSize" onClick={handlerYesDelete}>
              Yes
            </PopUpButtonNo>
          </div>
        </PopUp>
      ) : (
        <div className="profileButtonContainer">
          <TextButton
            onClick={() => navigate("/passwordreset")}
            className="resetButton fontSize"
          >
            Reset password
          </TextButton>
          <TextButton
            onClick={() => navigate("/admin/profile/update")}
            className="updateButton fontSize"
          >
            Update your profile
          </TextButton>
          <TextButtonDelete
            className="deleteButton fontSize"
            onClick={deleteHandler}
          >
            Delete your profile
          </TextButtonDelete>
        </div>
      )}

      <FooterElement></FooterElement>
    </ContainerUserProfile>
  );
}

export default Profile;
