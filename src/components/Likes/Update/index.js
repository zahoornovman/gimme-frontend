import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerUpdateLike } from "./styles";

function UpdateLike() {
    return ( 
        <ContainerUpdateLike>
            <Header></Header>
            <Header2>Update like</Header2>
            <FooterElement></FooterElement>
        </ContainerUpdateLike>
     );
}

export default UpdateLike;