import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerMyRequests } from "./styles";

function MyRequests() {
    return ( 
        <ContainerMyRequests>
            <Header></Header>
            <h2>My Requests</h2>
            <FooterElement></FooterElement>
        </ContainerMyRequests>
     );
}

export default MyRequests;