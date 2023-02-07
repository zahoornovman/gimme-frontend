import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerTagsRequests } from "./styles";

function AllrequestsRelatedToTag() {
    return ( 
        <ContainerTagsRequests>
            <Header></Header>
            <Header2>All requests for a selected tag</Header2>
            <FooterElement></FooterElement>
        </ContainerTagsRequests>
     );
}

export default AllrequestsRelatedToTag;