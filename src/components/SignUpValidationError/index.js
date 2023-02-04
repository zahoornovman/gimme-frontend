import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { TextButton } from "../../styles/MasterStyles";
import { ContainerSingUpValidationError} from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import HomeContactButtonSection from "../../elements/HomeContactButtonSection";

function SingUpValidationError() {
    const navigate = useNavigate()
    return (
        <ContainerSingUpValidationError>
            <Header></Header>
            <div className="passwordForgotenMessage fontSize">
                Please contact our backoffice, as an error has occured. They will set up the account for you.
            </div>
            <HomeContactButtonSection></HomeContactButtonSection>
            <FooterElement></FooterElement>
        </ContainerSingUpValidationError>
    );
}

export default SingUpValidationError;