import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerContact } from "./sytles";
import img_email from "../../../images/email.svg"
import img_phone from "../../../images/phone640x640.svg"
import img_whatsapp from "../../../images/whatsapp640x640.png"

function Contact() {
    return ( 
        <ContainerContact>
            <Header></Header>
            <div>
                <Header2>Contact possibilities:</Header2>
                <div>
                    <img src={img_email} />
                    <span>christian.f.g.zube@gmail.com</span>
                </div>
                <div>
                    <img src={img_phone} />
                    <span>+41 44 111 11 11</span>
                </div>
                <div>
                    <img src={img_whatsapp} />
                    <span>+41 79 111 11 11</span>
                </div>
            </div>
            <FooterElement></FooterElement>
        </ContainerContact>
     );
}

export default Contact;