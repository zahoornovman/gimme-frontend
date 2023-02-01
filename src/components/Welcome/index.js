
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import Header from "../../elements/Header";
import FooterElement from "../../elements/Footer";



function Welcome() {


    return (
        <div>
            <Header></Header>
            <FooterElement></FooterElement>
        </div>

    );
}

export default Welcome;