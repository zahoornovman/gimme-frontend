
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Header from "../../elements/Header";
import FooterElement from "../../elements/Footer";
import { ContainerWelcome } from "./styles";



function Welcome() {
    const user = useSelector((state) => state.user)
 
    return (
        <ContainerWelcome>
            <Header></Header>
            <div>{user.first_name}</div>
            <FooterElement></FooterElement>
        </ContainerWelcome>

    );
}

export default Welcome;