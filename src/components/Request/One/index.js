import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { TextButton } from "../../../styles/MasterStyles";
import { ContainerOneRequest } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lastPath } from "../../../slices/messages/messageSlice";

function OneRequest() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMessagedClicked = () => {
    const currentPath = window.location.pathname;
    const indexLastSlash = currentPath.lastIndexOf("/");
    const addId = currentPath.substring(indexLastSlash + 1);

    dispatch(
      lastPath({
        type: "want",
        id: addId,
      })
    );
    navigate("/message");
  };
  return (
    <ContainerOneRequest>
      <Header></Header>
      <h2>Requests</h2>
      <TextButton onClick={handleMessagedClicked}>Message</TextButton>
      <FooterElement></FooterElement>
    </ContainerOneRequest>
  );
}

export default OneRequest;
