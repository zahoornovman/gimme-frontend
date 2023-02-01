import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerAllOffers } from "./styles";

function AllOffers() {
    return (  
        <ContainerAllOffers>
            <Header></Header>
            <h2>All offers</h2>
            <FooterElement></FooterElement>
        </ContainerAllOffers>
    );
}

export default AllOffers;