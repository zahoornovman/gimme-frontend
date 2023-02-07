import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerAllRequests } from "./styles";

function AllRequests() {
    return ( 
        <ContainerAllRequests>
            <Header></Header>
            <h2>All Requests</h2>
            <FooterElement></FooterElement>
        </ContainerAllRequests>
    );
}

export default AllRequests;