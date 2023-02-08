import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerMyOffers } from "./styles";
import { useSelector } from "react-redux";
import { TextButton } from "../../../styles/MasterStyles";
import { useNavigate } from "react-router-dom";

function MyOffers() {
    const navigate = useNavigate()
    return (
        <ContainerMyOffers>
            <Header></Header>
            <div className="any">
                <h2>My Offers</h2>
                <TextButton
                    onClick={() => navigate("/offers/1")}
                >One Offer</TextButton>
            </div>

            <FooterElement></FooterElement>
        </ContainerMyOffers>
    );
}

export default MyOffers;