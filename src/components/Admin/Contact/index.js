import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerContact } from "./sytles";
import img_email from "../../../images/email.svg"
import img_phone from "../../../images/phone640x640.svg"
import img_whatsapp from "../../../images/WhatsApp512x513.svg"
import img_mailbox from "../../../images/mailbox.svg"

function Contact() {
    return (
        <><Header></Header>
        <ContainerContact>
            

                <Header2> Contact: </Header2>


            <section className="contactInfo">
                <div className="contactElements">gimme.switzerland@gmail.com</div>
                <div className="contactElements">+41 44 111 11 11</div>
                <div className="contactElements">+41 79 111 11 11 </div>
                <div className="contactElements">
                    <p>Heinrichstrasse 200 <br />8005 Zürich <br />Switzerland</p>
                </div>
            </section>
            
        </ContainerContact>
        <FooterElement></FooterElement>
        </>
    );
}

export default Contact;