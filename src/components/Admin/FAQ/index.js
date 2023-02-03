import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2 } from "../../../styles/MasterStyles";
import { ContainerFAQ } from "./sytles";

function FAQ() {
    return (
        <ContainerFAQ>
            <Header></Header>
            <div
            className="faqSection">
                <Header2>FAQ</Header2>
                <h3>What is Gimme?</h3>
                <div>
                    Gimme is an app-based service for swappers. Our aim is to make swapping easy and convenient.
                    We are a swapping only marketplace. All other marketplaces allow swapping but it's hard to know who the real swappers
                    are whereas everyone on Gimme is here to swap. There is no “maybe” swappers, everyone is open to swapping as a way of transaction.
                </div>
                <h3>Is Gimme free?</h3>
                <div>
                    Yes. It is entirely free to swap with Gimme.
                </div>
                <h3>How do I swap with Gimme?</h3>
                <div>Simply list an item and then offer your item to someone else in exchange. You ask the other swapper, if they'd like to consider a swap. If they are interested, then you can talk about the details.</div>
                <h3>How does delivery work?</h3>
                <div>Delivery is arranged between the involved users. You can decided to meet face to face or the goods can be send by a courrier or the local post company. The fees aren't taken over by Gimme.</div>
                <h3>Can I really swap anything?</h3>
                <div>Yes and no. You can swap anything that is legal to otherwise be sold without a license. You cannot swap items like alcohol or smoking instruments as well as a many other items that require a license to own such as many weapons. Of course, you cannot swap anything that does not belong to you and that is stolen. For details, please have a look at our Terms of use.</div>
                <h3>Can I include cash in my swap?</h3>
                <div>Yes! You can include cash if you believe that adding cash will sweeten the deal and make a swap more likely.</div>
                <h3>Can I offer more than 1 item in my swap offer?</h3>
                <div>Yes! You can offer as many items in exchange for one item. If you think that a swap is more likely to occur if you offer multiple items in exchange for one item than you may offer as many items as you wish.</div>
            </div>
            <FooterElement></FooterElement>
        </ContainerFAQ>
    );
}

export default FAQ;