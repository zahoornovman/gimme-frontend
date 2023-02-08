import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerSearchRequests } from "./styles";

function SearchRequests() {
    return ( 
        <ContainerSearchRequests>
            <Header></Header>
            <Header2>Search for a specific Request</Header2>
            <FooterElement></FooterElement>
        </ContainerSearchRequests>
     );
}

export default SearchRequests;