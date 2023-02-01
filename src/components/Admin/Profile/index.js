import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerUserProfile } from "./sytles";

function Profile() {
    return ( 
        <ContainerUserProfile>
            <Header></Header>
            <div>Your Profile</div>
            <FooterElement></FooterElement>
        </ContainerUserProfile>
     );
}

export default Profile;