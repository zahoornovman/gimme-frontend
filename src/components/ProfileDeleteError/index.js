import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { TextButton } from "../../styles/MasterStyles";
import { ContainerProfileDeleteError } from "./styles";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import HomeContactButtonSection from "../../elements/HomeContactButtonSection";

function ProfileDeleteError() {
    const navigate = useNavigate()
    return (
        <ContainerProfileDeleteError>
            <Header></Header>
            <div className="passwordForgotenMessage fontSize">
                Please contact our backoffice, as an error has occured. They will be able to delete your account.
            </div>
            <HomeContactButtonSection></HomeContactButtonSection>
            <FooterElement></FooterElement>
        </ContainerProfileDeleteError>
    );
}

export default ProfileDeleteError;