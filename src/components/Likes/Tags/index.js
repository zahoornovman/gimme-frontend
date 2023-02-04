import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerTagsLikes } from "./styles";

function AllLikesRelatedToTag() {
    return ( 
        <ContainerTagsLikes>
            <Header></Header>
            <Header2>All likes for a selected tag</Header2>
            <FooterElement></FooterElement>
        </ContainerTagsLikes>
     );
}

export default AllLikesRelatedToTag;