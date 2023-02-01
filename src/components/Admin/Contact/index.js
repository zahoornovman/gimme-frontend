import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerContact } from "./sytles";

function Contact() {
    return ( 
        <ContainerContact>
            <Header></Header>
            <div>Please use the email button in the footer to get in touch with us.</div>
            <FooterElement></FooterElement>
        </ContainerContact>
     );
}

export default Contact;