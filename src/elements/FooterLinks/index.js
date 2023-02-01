import img_email from "../../images/email.svg"
import img_facebook from "../../images/facebook.svg"
import img_twiter from "../../images/twitter.svg"
import img_instagram from "../../images/instagram.svg"
import img_youtube from "../../images/YouTube.svg"
import {LinksFooter} from "./styles"

function FooterLinks() {
    return ( 
        <LinksFooter>                
                <a
                    title="To send an email to Gimme."
                    href="mailto:christian.f.g.zube@gmail.com"><img src={img_email} /></a>
                <div>|</div>
                <a
                    title="To access Facebook."
                    href="https://www.facebook.com/" target="_blank"><img src={img_facebook} /></a>
                <div>|</div>
                <a
                    title="To access Tweets."
                    href="https://twitter.com/" target="_blank"><img src={img_twiter} /></a>
                <div>|</div>
                <a
                    title="To access Instagram."
                    href="https://www.instagram.com/" target="_blank"><img src={img_instagram} /></a>
                <div>|</div>
                <a
                    title="To access YouTube."
                    href="https://www.youtube.com/" target="_blank"><img src={img_youtube} /></a>
            </LinksFooter>
     );
}

export default FooterLinks;