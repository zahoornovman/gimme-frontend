import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainernewOffer } from "./styles";

function NewOffer() {
    return ( 
        <ContainernewOffer>
            <Header></Header>
            <h2>New Offer</h2>
            <FooterElement></FooterElement>
        </ContainernewOffer>
     );
}

export default NewOffer;