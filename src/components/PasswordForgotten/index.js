import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { TextButton } from "../../styles/MasterStyles";
import { ContainerPasswordForgotten } from "./styles";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import HomeContactButtonSection from "../../elements/HomeContactButtonSection";

function PasswordForgotten() {
    const navigate = useNavigate()
    return (
        <ContainerPasswordForgotten>
            <Header></Header>
            <div className="passwordForgotenMessage fontSize">
                Please contact our backoffice. They will initialize the resetting of your password.
            </div>
            <HomeContactButtonSection></HomeContactButtonSection>
            <FooterElement></FooterElement>
        </ContainerPasswordForgotten>
    );
}

export default PasswordForgotten;