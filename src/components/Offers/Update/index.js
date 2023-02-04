import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerUpdateOffer } from "./styles";

function UpdateOffer() {
    return ( 
        <ContainerUpdateOffer>
            <Header></Header>
            <Header2>Update offer</Header2>
            <FooterElement></FooterElement>
        </ContainerUpdateOffer>
     );
}

export default UpdateOffer;