import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { TextButton } from "../../styles/MasterStyles";
import { ContainerPasswordForgotten } from "./styles";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

function PasswordForgotten() {
    const navigate = useNavigate()
    return (
        <ContainerPasswordForgotten>
            <Header></Header>
            <div className="passwordForgotenMessage fontSize">
                Please contact our backoffice. They will initialize the resetting of your password.
            </div>
            <div className="passwordForgottenButtonsSection">
                <TextButton
                    onClick={() => navigate('/')}
                    className="fontSize"
                >
                    Home
                </TextButton>
                <TextButton
                    onClick={()=> navigate("/admin/contact")}
                    className="fontSize"
                >
                    Contact us
                    </TextButton>
            </div>
            <FooterElement></FooterElement>
        </ContainerPasswordForgotten>
    );
}

export default PasswordForgotten;