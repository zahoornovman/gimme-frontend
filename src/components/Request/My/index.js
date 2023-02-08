import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerMyRequests } from "./styles";
import { TextButton } from "../../../styles/MasterStyles";
import { useNavigate } from "react-router-dom";

function MyRequests() {
    const navigate = useNavigate()
    return (
        <ContainerMyRequests>
            <Header></Header>
            <h2>My Requests</h2>
            <TextButton
                onClick={() => navigate("/requests/1")}
            >One Request</TextButton>
            <FooterElement></FooterElement>
        </ContainerMyRequests>
    );
}

export default MyRequests;