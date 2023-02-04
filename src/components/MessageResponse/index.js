import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { Header2 } from "../../styles/MasterStyles";
import { ContainerMessageResponse } from "./styles";

function MessageResponse() {
    return (
        <ContainerMessageResponse>
            <Header></Header>
            <Header2>Message response</Header2>
            <FooterElement></FooterElement>
        </ContainerMessageResponse>
    );
}

export default MessageResponse;