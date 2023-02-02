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
        <ContainerContact>
            <Header></Header>
            <div className="contactContentSection">
                <Header2
                    className="fontSize"
                >Contact possibilities:</Header2>
                <div className="sectionContactPossibility">
                    <div className="contactPosibility">
                        <img src={img_email}
                            className="icons"
                        />
                        <span
                            className="fontSize"
                        >gimme.switzerland@gmail.com</span>
                    </div>
                    <div className="contactPosibility">
                        <img src={img_phone}
                            className="icons" />
                        <span
                            className="fontSize"
                        >+41 44 111 11 11</span>
                    </div>
                    <div className="contactPosibility">
                        <img src={img_whatsapp}
                            className="icons" />
                        <span
                            className="fontSize"
                        >+41 79 111 11 11</span>
                    </div>
                    <div className="contactPosibility">
                        <img src={img_mailbox}
                            className="mailbox" />
                        <div className="fontSize addressSection"
                        >
                            <span>Heinrichstrasse 200</span><span>8005 Zurich</span><span>Switzerland</span>
                        </div>
                    </div>
                </div>

            </div>
            <FooterElement></FooterElement>
        </ContainerContact>
    );
}

export default Contact;