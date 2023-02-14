import { TextButton } from "../../styles/MasterStyles";
import { ContainerHomeContectButtonSection } from "./styles";
import { useNavigate } from "react-router-dom"

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