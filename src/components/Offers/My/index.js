import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerMyOffers } from "./styles";

function MyOffers() {
    return ( 
        <ContainerMyOffers>
            <Header></Header>
            <h2>My offers</h2>
            <FooterElement></FooterElement>
        </ContainerMyOffers>
     );
}

export default MyOffers;