import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { TextButton } from "../../styles/MasterStyles";
import { ContainerProfileChangeError} from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import HomeContactButtonSection from "../../elements/HomeContactButtonSection";

function ProfileChangeError() {
    const navigate = useNavigate()
    return (
        <ContainerProfileChangeError>
            <Header></Header>
            <div className="passwordForgotenMessage fontSize">
                Please contact our backoffice, as an error has occured. They will be able to assist you.
            </div>
            <HomeContactButtonSection></HomeContactButtonSection>
            <FooterElement></FooterElement>
        </ContainerProfileChangeError>
    );
}

export default ProfileChangeError;