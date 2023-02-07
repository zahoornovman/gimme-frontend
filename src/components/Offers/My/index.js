import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerMyOffers } from "./styles";
import { useSelector } from "react-redux";

function MyOffers() {

    return (
        <ContainerMyOffers>
            <Header></Header>
            <div className="any">
                <h2>My Offers</h2>
            </div>
            
            <FooterElement></FooterElement>
        </ContainerMyOffers>
    );
}

export default MyOffers;