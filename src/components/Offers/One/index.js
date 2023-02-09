import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { TextButton } from "../../../styles/MasterStyles";
import { ContainerOneOffer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lastPath } from "../../../slices/messages/messageSlice";

function OneOffer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMessagedClicked = () => {
    const currentPath = window.location.pathname;
    const indexLastSlash = currentPath.lastIndexOf("/");
    const addId = currentPath.substring(indexLastSlash + 1);

    dispatch(
      lastPath({
        type: "have",
        id: addId,
      })
    );
    navigate("/message");
  };
  return (
    <ContainerOneOffer>
      <Header></Header>
      <h2>One offer</h2>
      <TextButton onClick={handleMessagedClicked}>Message</TextButton>
      <FooterElement></FooterElement>
    </ContainerOneOffer>
  );
}

export default OneOffer;
