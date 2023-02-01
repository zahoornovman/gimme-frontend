

import { Footer } from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import FooterLinks from "../FooterLinks"

let date = new Date
date = date.getYear() + 1900

function FooterElement() {
    const navigate = useNavigate()
    let path = window.location.pathname
    return (
        <Footer>
            <div className="firstLine">
                <div>
                    {`© Gimme, ${date}`}
                </div>
                
                <div
                    className="displayFirstLine">
                    <FooterLinks></FooterLinks>
                </div>
            </div>
            <div
                className="displaySecondLine">
                <FooterLinks></FooterLinks>
            </div>

        </Footer>
    );
}

export default FooterElement;