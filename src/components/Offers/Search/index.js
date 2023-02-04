import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerSearch } from "./styles";

function SearchOffers() {
    return ( 
        <ContainerSearch>
            <Header></Header>
            <Header2>Search in the offers</Header2>
            <FooterElement></FooterElement>
        </ContainerSearch>
     );
}

export default SearchOffers;