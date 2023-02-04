import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerSearchLikes } from "./styles";

function SearchLikes() {
    return ( 
        <ContainerSearchLikes>
            <Header></Header>
            <Header2>Search for a specific like</Header2>
            <FooterElement></FooterElement>
        </ContainerSearchLikes>
     );
}

export default SearchLikes;