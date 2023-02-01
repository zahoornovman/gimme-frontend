import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerNewLike } from "./styles";

function NewLike() {
    return ( 
        <ContainerNewLike>
            <Header></Header>
            <h2>New Like</h2>
            <FooterElement></FooterElement>
        </ContainerNewLike>
     );
}

export default NewLike;