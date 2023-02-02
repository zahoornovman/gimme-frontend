import { TextButton } from "../../styles/MasterStyles";
import { ContainerHomeContectButtonSection } from "./styles";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

function HomeContactButtonSection() {
    const navigate = useNavigate()
    return (
        <ContainerHomeContectButtonSection>
            <TextButton
                onClick={() => navigate('/')}
                className="fontSize"
            >
                Home
            </TextButton>
            <TextButton
                onClick={() => navigate("/admin/contact")}
                className="fontSize"
            >
                Contact us
            </TextButton>
        </ContainerHomeContectButtonSection>
    );
}

export default HomeContactButtonSection;