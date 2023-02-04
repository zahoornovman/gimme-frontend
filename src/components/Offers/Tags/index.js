import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerTagsOffer } from "./styles";

function AllOffersRelatedToTag() {
    return ( 
        <ContainerTagsOffer>
            <Header></Header>
            <Header2>All offers for a selected tag</Header2>
            <FooterElement></FooterElement>
        </ContainerTagsOffer>
     );
}

export default AllOffersRelatedToTag;