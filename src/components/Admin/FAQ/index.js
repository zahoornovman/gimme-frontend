
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2, OpenCloseBox } from "../../../styles/MasterStyles";
import { ContainerFAQ } from "./sytles";
import img_barsArrowDown from "../../../images/barsArrowDown.svg"
import img_barsArrowUp from "../../../images/barsArrowUp.svg"
import {  Link } from "react-router-dom"
import { useState } from "react";

function FAQ() {

    const [displayQuestion1, setdisplayQuestion1] = useState(false);
    const [displayQuestion2, setdisplayQuestion2] = useState(false);
    const [displayQuestion3, setdisplayQuestion3] = useState(false);
    const [displayQuestion4, setdisplayQuestion4] = useState(false);
    const [displayQuestion5, setdisplayQuestion5] = useState(false);
    const [displayQuestion6, setdisplayQuestion6] = useState(false);
    const [displayQuestion7, setdisplayQuestion7] = useState(false);

    const clickArrowQuestion1 = () => {
        setdisplayQuestion1(!displayQuestion1)
        setdisplayQuestion2(false)
        setdisplayQuestion3(false)
        setdisplayQuestion4(false)
        setdisplayQuestion5(false)
        setdisplayQuestion6(false)
        setdisplayQuestion7(false)
    }
    const clickArrowQuestion2 = () => {
        setdisplayQuestion1(false)
        setdisplayQuestion2(!displayQuestion2)
        setdisplayQuestion3(false)
        setdisplayQuestion4(false)
        setdisplayQuestion5(false)
        setdisplayQuestion6(false)
        setdisplayQuestion7(false)
    }
    const clickArrowQuestion3 = () => {
        setdisplayQuestion1(false)
        setdisplayQuestion2(false)
        setdisplayQuestion3(!displayQuestion3)
        setdisplayQuestion4(false)
        setdisplayQuestion5(false)
        setdisplayQuestion6(false)
        setdisplayQuestion7(false)
    }
    const clickArrowQuestion4 = () => {
        setdisplayQuestion1(false)
        setdisplayQuestion2(false)
        setdisplayQuestion3(false)
        setdisplayQuestion4(!displayQuestion4)
        setdisplayQuestion5(false)
        setdisplayQuestion6(false)
        setdisplayQuestion7(false)
    }
    const clickArrowQuestion5 = () => {
        setdisplayQuestion1(false)
        setdisplayQuestion2(false)
        setdisplayQuestion3(false)
        setdisplayQuestion4(false)
        setdisplayQuestion5(!displayQuestion5)
        setdisplayQuestion6(false)
        setdisplayQuestion7(false)
    }
    const clickArrowQuestion6 = () => {
        setdisplayQuestion1(false)
        setdisplayQuestion2(false)
        setdisplayQuestion3(false)
        setdisplayQuestion4(false)
        setdisplayQuestion5(false)
        setdisplayQuestion6(!displayQuestion6)
        setdisplayQuestion7(false)
    }
    const clickArrowQuestion7 = () => {
        setdisplayQuestion1(false)
        setdisplayQuestion2(false)
        setdisplayQuestion3(false)
        setdisplayQuestion4(false)
        setdisplayQuestion5(false)
        setdisplayQuestion6(false)
        setdisplayQuestion7(!displayQuestion7)
    }

    return (
        <ContainerFAQ>
            <Header></Header>
            <div className="faqSection">
                <Header2
                    className="fontSize">FAQ</Header2>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3>1. What is Gimme?</h3>
                        {
                            displayQuestion1
                                ?
                                <img
                                    src={img_barsArrowUp}
                                    onClick={clickArrowQuestion1} />
                                :
                                <img src={img_barsArrowDown}
                                    onClick={clickArrowQuestion1} />
                        }

                    </div>
                    {
                        displayQuestion1
                            ?
                            <div className="content padding fontSize">
                                Gimme is an app-based service for swappers. Our aim is to make swapping easy and convenient.
                                We are a swapping only marketplace. All other marketplaces allow swapping but it's hard to know who the real swappers
                                are whereas everyone on Gimme is here to swap. There is no “maybe” swappers, everyone is open to swapping as a way of transaction.
                            </div>
                            :
                            <></>
                    }
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3>2. Is Gimme free?</h3>
                        {
                            displayQuestion2
                                ?
                                <img
                                    src={img_barsArrowUp}
                                    onClick={clickArrowQuestion2} />
                                :
                                <img src={img_barsArrowDown}
                                    onClick={clickArrowQuestion2} />
                        }

                    </div>
                    {
                        displayQuestion2
                            ?
                            <div className="content padding fontSize">
                                Yes. It is entirely free to swap with Gimme.
                            </div>
                            :
                            <></>
                    }
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3>3. How do I swap with Gimme?</h3>
                        {
                            displayQuestion3
                                ?
                                <img
                                    src={img_barsArrowUp}
                                    onClick={clickArrowQuestion3} />
                                :
                                <img src={img_barsArrowDown}
                                    onClick={clickArrowQuestion3} />
                        }

                    </div>
                    {
                        displayQuestion3
                            ?
                            <div className="content padding fontSize">
                                Simply list an item and then offer your item to someone else in exchange. You ask the other swapper, if they'd like to consider a swap. If they are interested, then you can talk about the details.
                            </div>
                            :
                            <></>
                    }
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3>4. How does delivery work?</h3>
                        {
                            displayQuestion4
                                ?
                                <img
                                    src={img_barsArrowUp}
                                    onClick={clickArrowQuestion4} />
                                :
                                <img src={img_barsArrowDown}
                                    onClick={clickArrowQuestion4} />
                        }

                    </div>
                    {
                        displayQuestion4
                            ?
                            <div className="content padding fontSize">
                                Delivery is arranged between the involved users. You can decided to meet face to face or the goods can be send by a courrier or the local post company. The fees aren't taken over by Gimme.
                            </div>
                            :
                            <></>
                    }
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3>5. Can I really swap anything?</h3>
                        {
                            displayQuestion5
                                ?
                                <img
                                    src={img_barsArrowUp}
                                    onClick={clickArrowQuestion5} />
                                :
                                <img src={img_barsArrowDown}
                                    onClick={clickArrowQuestion5} />
                        }

                    </div>
                    {
                        displayQuestion5
                            ?
                            <div className="content padding fontSize">
                                Yes and no. You can swap anything that is legal to otherwise be sold without a license. You cannot swap items like alcohol or smoking instruments as well as a many other items that require a license to own such as many weapons. Of course, you cannot swap anything that does not belong to you and that is stolen. For details, please have a look at our <Link to={"../admin/termsofuse"}>terms of use</Link>.
                            </div>
                            :
                            <></>
                    }
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3>6. Can I include cash in my swap?</h3>
                        {
                            displayQuestion6
                                ?
                                <img
                                    src={img_barsArrowUp}
                                    onClick={clickArrowQuestion6} />
                                :
                                <img src={img_barsArrowDown}
                                    onClick={clickArrowQuestion6} />
                        }

                    </div>
                    {
                        displayQuestion6
                            ?
                            <div className="content padding fontSize">
                                Yes! You can include cash if you believe that adding cash will sweeten the deal and make a swap more likely.
                            </div>
                            :
                            <></>
                    }
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3>7. Can I offer more than 1 item in my swap offer?</h3>
                        {
                            displayQuestion7
                                ?
                                <img
                                    src={img_barsArrowUp}
                                    onClick={clickArrowQuestion7} />
                                :
                                <img src={img_barsArrowDown}
                                    onClick={clickArrowQuestion7} />
                        }

                    </div>
                    {
                        displayQuestion7
                            ?
                            <div className="content padding fontSize">
                                Yes! You can offer as many items in exchange for one item. If you think that a swap is more likely to occur if you offer multiple items in exchange for one item than you may offer as many items as you wish.
                            </div>
                            :
                            <></>
                    }
                </OpenCloseBox>
            </div>


            <FooterElement></FooterElement>
        </ContainerFAQ>
    );
}

export default FAQ;