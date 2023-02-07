import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerUpdateRequest } from "./styles";

function UpdateRequest() {
    return ( 
        <ContainerUpdateRequest>
            <Header></Header>
            <Header2>Update Request</Header2>
            <FooterElement></FooterElement>
        </ContainerUpdateRequest>
     );
}

export default UpdateRequest;