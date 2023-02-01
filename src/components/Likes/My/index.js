import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerMyLikes } from "./styles";

function MyLikes() {
    return ( 
        <ContainerMyLikes>
            <Header></Header>
            <h2>My Likes</h2>
            <FooterElement></FooterElement>
        </ContainerMyLikes>
     );
}

export default MyLikes;