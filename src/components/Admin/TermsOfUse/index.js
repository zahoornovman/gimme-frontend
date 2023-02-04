
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { Header2, OpenCloseBox, TextContainer } from "../../../styles/MasterStyles";
import { ContainerTermsOfUse } from "./styles"
import { useNavigate, useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";

function FAQ() {

    return (
        <ContainerTermsOfUse>
            <Header></Header>
            <div className="termsOfUseSection">
                <Header2
                    className="fontSize">Terms of use</Header2>
                <OpenCloseBox>
                    <div className="content padding fontSize">
                        Effective Date: 4 February 2023
                        <br></br>
                        <br></br>
                        Welcome to Gimme! At Gimme our goal is to find you that perfect swap. Swapping saves money, can make you money, saves the environment and unlocks agreed value over cash value. Swapping and has been around for thousands of years. Gimme now brings these ancient skills into a convenient and modern application.
                        <br></br>
                        <br></br>
                        These terms govern your use of our web application, "Gimme" (“the web app” as further defined below). The app is owned and operated by Gimme Limited.
                        <br></br>
                        <br></br>
                        These terms constitute a binding contract between you and us. If you continue to use the web app items, you acknowledge that you have reviewed, understood and agree to be bound by these terms. If you do not understand the terms, if you do not agree to be bound by the terms, or if you need more time to review and consider the terms, then you must stop using the app items immediately. We only agree to your use of the app items if you agree to these terms.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3>DEFINITIONS</h3>
                    </div>
                    <div className="content padding fontSize">
                        "Web app" means the mobile application called "Gimme" including all pages, sub-pages, blogs, forums, and all other connected internet content whatsoever and includes any updated or subsequent versions.
                        “Web app items” means the web app, Our Content and the Materials.
                        “Content” means any content, writing, images, audiovisual content or other information published on the app.
                        "Developer IP" is all intellectual property that is owned by us and/or that is licensed to us including, but not limited to, the contents, layout, design, colours, appearance, graphics, imagery and code for the app items and Our Content as well as all copyright, trade marks (registered and unregistered), trade secrets, patents and other intellectual property contained in the web app items and Our Content.
                        “Digital Platform” is a third party digital platform which allows you to access the web app using your login details for that digital platform.
                        “Digital Platform Login” means your login details for accessing a Digital Platform.
                        “Goods” means any goods advertised, swapped, sold or posted on the web app by a User.
                        "Identifying Information" means information provided by you when registering to use the web app items, including but not limited to your name and email address, a user name and a password.
                        "Materials" means any content, materials, information or documentation that we may provide to you in connection with the app including documentation, data, information developed by us or owned by us, and other materials which may assist in your use of the web app.
                        “Our Content” means all Content published on the web app by us.
                        "Parties" means both you and us collectively.
                        “Services” means any services advertised, swapped, sold or posted on the app by a User.
                        "Terms" means these terms of use.
                        “Third Party Goods” means any goods advertised, sold or provided via Third Party Links.
                        "Third Party Links" means links or references to websites, applications or content other than the app, or to materials other than the Materials, none of which are controlled by us.
                        “Third Party Services” means any services advertised, sold or provided via Third Party Links.
                        "us", "we", "our" refers to Gimme Limited.
                        “User” means any person (including body corporate) who offers to swap Goods or Services via the web app.
                        "you" or "your" refers to the user of the web app.
                        “Your Content” means all Content published on the web app by you or which you otherwise share with us.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >INTERPRETATION</h3>
                    </div>
                    <div className="content padding fontSize">
                        In these terms, unless the context otherwise requires, the following rules of interpretation shall apply:
                        <br></br>
                        <br></br>
                        (a) words referring to one gender include every other gender;
                        <br></br>
                        (b) words referring to a singular number include the plural, and words referring to a plural include the singular;
                        <br></br>
                        (c) words referring to a person or persons includes companies, firms, corporations, organisations and vice versa; and
                        <br></br>
                        (d) any obligation on a Party not to do something includes an obligation not to allow that thing to be done.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >YOUR AGREEMENT AND REPRESENTATIONS</h3>
                    </div>
                    <div className="content padding fontSize">
                        By continuing to use the web app items you represent and warrant to us that:
                        <br></br>
                        <br></br>
                        (a) you have legal capacity to enter these terms; and
                        <br></br>
                        (b) you have complied with all of these terms.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >AGE RESTRICTION</h3>
                    </div>
                    <div className="content padding fontSize">
                        In order to use the web app items, you must be aged at least 18 years or have the permission of your parents/carers.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                <div className="title padding fontSize">
                        <h3 >TERRITORIAL RESTRICTION</h3>
                    </div>
                    <div className="content padding fontSize">
                        In order to use the web app items, you must be located in Switzerland.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                <div className="title padding fontSize">
                        <h3 >USER REGISTRATION</h3>
                    </div>
                    <div className="content padding fontSize">
                        You may be asked to register with us in order to use or access the web app items.
                        If you register with us, you will be asked to provide us with Identifying Information. This Identifying Information will allow you to access the web app items. We reserve the right to close any account if we are unable to verify your user registration details.
                        You acknowledge that:
                        you are responsible for ensuring the accuracy of any Identifying Information that you provide to us as part of the registration process;
                        you will not share your login details with any third party and if you discover that your login details have been compromised, you will notify us immediately in writing; and
                        you are responsible for maintaining the safety and security of your Identifying Information as well as keeping us informed of any changes to Your Identifying Information.
                        You may also access the web app items by using a Digital Platform Login. If you access the web app items using a Digital Platform Login you authorise us to access and handle any information that we receive from the relevant social media platform.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >LICENCE TO USE WEB APP, CONTENT AND MATERIALS</h3>
                    </div>
                    <div className="content padding fontSize">
                         Subject to these terms and your compliance with these terms, we grant you a licence to use the web app items for any legitimate and legal purpose which is not prohibited by these terms. The licence granted under these terms is non-exclusive, limited, non-transferable revocable and terminates upon your cessation of use of the web app items are free to download and use. However, we may offer in-app purchases or charge in-app fees for access to some features of the web app and reserve the right to do so and to change our fees at any time by giving you at least 14 days&rsquo; notice. By downloading, installing or using the web app items you may incur third party charges from your mobile, internet or other provider.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >ACCEPTABLE USE</h3>
                    </div>
                    <div className="content padding fontSize">
                        You agree that:
                        all information that you upload or provide to the web app will be accurate, complete and honest and you will update all such information as necessary so that it remains at all times accurate, complete and honest;
                        you will not use the web app items for any unlawful purpose or any purpose prohibited under these terms;
                        you will not use the web app items in any way that could damage the app items or our general business;
                        you hold full, clear and unencumbered title to any Goods which you make available on the web app for swapping and have such Goods in your possession at all times while they are posted on the web app;
                        all Goods that you advertise for swapping are of acceptable quality and fit for the purpose for which they are intended (including any advertised purpose);
                        you will not make any false or misleading statements in relation to Goods or Services;
                        you will deliver Goods as you have advertised them, for example in the same condition and number;
                        you will comply with The Australian Consumer Law (to the extent that it applies to any transaction between you and another User);
                        if you agree to pay a monetary component for a swap of any Goods or Services, you will promptly pay the agreed amount of money as instructed by the other User;
                        you will meet all of your tax obligations (if any) including any GST obligations in relation to all Goods and Services that you swap;
                        if swapping Services which are required by law to be insured, you hold the appropriate insurance and the recipient of your Services is entitled to protection under your insurance policy; and
                        if swapping Services which are required by law to be provided by certified persons, you hold the appropriate certification.
                        You will not make available on the web app (or to Users with whom you were connected via the web app) for swapping any of the following Goods or Services: firearms, weapons, fireworks, explosives; drugs (including illicit, prescription and non-prescription drugs), other controlled substances and accessories intended for use in connection with drugs or other controlled substances, hazardous materials or substances; alcohol and tobacco products; electronic gift cards; animals, human or animal remains or parts; raffle tickets, lottery tickets or any other item that confers on the holder an opportunity to win a prize, gaming machines; tickets for more than face value; food products which have perished or are past their best before or use by date; identification cards and documents including passports; personal information; keys, key cutting or lock picking devices; burglary tools or accessories; stolen, pirated or counterfeit goods; pornography; stocks or other securities; used underwear, swimwear or other under garments; used cosmetics; sexual services; surrogacy or adoption services; goods or services which facilitate illegal activity; goods which are unsafe or do not meet mandatory safety standards; goods which do not comply with all applicable product safety laws; any other goods or services which are contrary to law.
                        You further agree not to use the web app items:
                        <br></br>
                        <br></br>
                        (a) to harass, abuse or threaten any other person or to otherwise violate any other person's legal rights;
                        <br></br>
                        (b) to violate any intellectual property rights of us or of any third party;
                        <br></br>
                        (c) to upload or otherwise disseminate any computer viruses or other software that may damage the property of us or any of our users;
                        <br></br>
                        (d) to commit any kind of fraud;
                        <br></br>
                        (e) to engage in or create any unlawful gambling, sweepstakes or pyramid schemes;
                        <br></br>
                        (f) to publish or distribute any obscene or defamatory material;
                        <br></br>
                        (g) to publish or distribute any material that incites violence, hatred or discrimination towards any person, group or community; and
                        <br></br>
                        (h) to gather information about others unlawfully or use information obtained about others for any purpose other than in connection with the swapping of Goods and/or Services.
                        <br></br>
                        <br></br>
                        You may withdraw any Goods or Services posted on the web app at any time prior to agreeing to a swap with another User. You have no obligation to accept an offer to swap but once accepted you will honour your agreement with the other User. As soon as reasonably practicable after completing a swap you will remove the applicable post.
                        If you become aware of any unacceptable use of the web app items please report it to us at gimme.switzerland@gmail.com
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >EXCLUSION OF LIABILITY</h3>
                    </div>
                    <div className="content padding fontSize">
                        For the purpose of this clause, “us”, we” and “our” includes all of Gimme Limited's officers, directors, employees, affiliates, agents and other authorised representatives.
                        The web app items are provided on an “as is” basis and may change at any time without prior notice.
                        You accept and acknowledge that the web appitems may contain mistakes, errors and inaccuracies.
                        We do not sell or swap Goods or Services with you. Your use of the web app items is entirely at your risk. We take no responsibility for the actions or omissions of Users. It is your responsibility to make sure that the web app items and any Goods or Services available through the web app suits your particular purpose.
                        We have no liability for any breach of these terms by any User.
                        We have no liability for monitoring Content which is posted or uploaded to the web app.
                        To the maximum extent permitted by law, we hereby expressly exclude all warranties, guarantees, representations or terms (whether express or implied) except for those expressly set out in these terms.
                        We provide no guarantees or warranties regarding the accuracy, completeness, performance, reliability, timeliness, quality, safety, legality or suitability for a particular purpose of the web appitems.
                        To the maximum extent permitted by law, we hereby expressly exclude any liability in relation to the accuracy, completeness, performance, reliability, timeliness, quality, safety, legality or suitability for a particular purpose of the web app items.
                        To the maximum extent permitted by law, we hereby expressly exclude any liability in relation to loss of data, interruption to your business or any damages which are incidental to or arise from such loss of data or interruption to business.
                        To the maximum extent permitted by law, we will not be liable for any damage, loss, cost or expense including legal costs and expenses, whether direct or indirect, incurred by you in connection with your use of the web app items.
                        For Goods and/or Services:
                        <br></br>
                        <br></br>
                        (a) You acknowledge and agree that we have no control over Goods and/or Services and that you acquire Goods and/or Services at your own risk.
                        <br></br>
                        (b) You acknowledge and agree that we assume no liability and provide no warranties or guarantees regarding the accuracy, completeness, performance, reliability, timeliness, quality, condition, merchantability, safety, legality or suitability for a particular purpose of Goods and/or Services.
                        <br></br>
                        (c) For any claim you may have against the third party provider of the Goods and/or Services (such as the relevant User or the manufacturer) you agree to pursue that claim directly with that third party provider of the Goods and/or Services and not with us.
                        <br></br>
                        (d) We take no responsibility for, and have no obligation to replace, Goods that are lost or damaged during delivery.
                        <br></br>
                        (e) To the maximum extent permitted by law, you hereby release us from any claim related to Goods and/or Services including any and all warranty, consumer guarantees and product liability claims.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >INDEMNITY</h3>
                    </div>
                    <div className="content padding fontSize">
                        You hereby indemnify us (which, for the sake of clarity, also includes any of our officers, directors, employees, affiliates, agents and other authorised representatives) and you agree to defend us and to hold us harmless in relation to any and all claims, suits, demands, actions, liabilities, costs and expenses (including legal costs and expenses on a full indemnity basis) which may arise from or relate to your use or misuse of the web appitems or your breach of these terms. You agree that we may select our own legal representation and may participate in our own legal proceedings if, and to the extent that, we choose and in such case the indemnity set out herein shall continue to apply.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >DELIVERY/RETURNS/REFUNDS/REPAIRS</h3>
                    </div>
                    <div className="content padding fontSize">
                        It is the responsibility of the relevant Users to mutually agree which of them will arrange delivery of any Goods which are to be swapped and who will pay for such delivery.
                        You acknowledge and accept that there are inherent risks with downloading any digital Goods. Please contact us using the details at the end of these terms if you experience technical problems regarding delivery of digital Goods. While we accept no responsibility for any delivery failure, if the delivery failure of digital Goods is as a direct result of a technical problem with the web app we will use reasonable efforts to assist you with obtaining successful delivery of the digital Goods.
                        Any disputes regarding Goods which are lost or damaged during delivery should be taken up directly with the relevant delivery company and/or the relevant User, as applicable.
                        We accept no responsibility for procuring returns, refunds or repairs. Please contact the relevant User.
                        The cost of returning Goods which are defective or otherwise are not delivered as agreed will be at the expense of the User who provided the defective or otherwise deficient Goods unless the relevant Users have agreed otherwise.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >VARIATION OF TERMS</h3>
                    </div>
                    <div className="content padding fontSize">
                        You hereby acknowledge and agree that we may vary or amend these terms from time to time. If you continue to use the web app following any such variation or amendment you will be deemed to have confirmed and agreed to the new terms as varied or amended.
                        You agree to routinely monitor these terms and to refer to the Effective Date posted at the top of these terms in order to monitor any variations or amendments. You further agree to clear your cache when doing so in order to avoid accessing a previous version of these terms.
                        In the event that you fail to monitor any variations or amendments of these terms, you agree that such failure shall be considered an affirmative waiver of your right to review the varied or amended terms.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >THIRD PARTY LINKS</h3>
                    </div>
                    <div className="content padding fontSize">
                        We may from time to time include Third Party Links in the app items.
                        You hereby acknowledge that these Third Party Links are provided for your information only and that we do not make any representations, warranties or guarantees as to the accuracy, completeness, performance, reliability, timeliness, quality or suitability for a particular purpose of Third Party Links, Third Party Goods or Third Party Services. You use the Third Party Links at your own risk.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >AFFILIATE MARKETING AND ADVERTISING</h3>
                    </div>
                    <div className="content padding fontSize">
                        We may engage in affiliate marketing whereby we receive a commission on, or a percentage of, proceeds of sales of Third Party Goods and/or Third Party Services that occur through our web app or via Third Party Links. We may accept advertising and sponsorships whereby third parties pay us to advertise on the app, or we may receive other forms of advertising compensation.
                        We accept no liability for any Third Party Links, Third Party Goods or Third Party Services.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >CHANGES TO WEB APP</h3>
                    </div>
                    <div className="content padding fontSize">
                        We may, in our sole discretion, vary, alter, amend, change or update the web app items at any time.
                        The web app may be unavailable from time to time (whether due to maintenance or for any other reason).
                        You acknowledge, agree and accept that we take no responsibility for, and to the maximum extent permitted by law we shall not be liable in any way for, the web app items being temporarily or permanently unavailable, whether due to reasons within our control or not.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >INTELLECTUAL PROPERTY</h3>
                    </div>
                    <div className="content padding fontSize">
                        You hereby acknowledge and agree that, as between us and you, we own all intellectual property rights in the web app items and that nothing in these terms amounts to a transfer of any intellectual property rights from us to you.
                        You hereby acknowledge and agree that you will not use the Developer IP for any unlawful or infringing purpose. If you use any Developer IP for a lawful purpose you will not remove any copyright notices or other IP notices from the Developer IP.
                        You hereby acknowledge and agree that you will not reproduce or distribute the Developer IP in any way, including electronically or via registration of any new trade marks, business names or Uniform Resource Locators (URLs) without express written permission from us.
                        You grant us a worldwide, irrevocable, perpetual, non-exclusive, royalty-free and transferrable right and licence to use Your Content in any way we choose. This licence includes a right and licence to:
                        <br></br>
                        <br></br>
                        (a) reproduce, copy, alter or make derivate works from Your Content;
                        <br></br>
                        (b) display, communicate to the public, broadcast or transmit Your Content; and
                        <br></br>
                        (c) authorise any other person, company or organisation to use Your Content.
                        <br></br>
                        <br></br>
                        To the extent that you hold any moral rights in connection with Your Content, you hereby consent to us making any material alterations to Your Content and doing or omitting to do any acts which would otherwise infringe your moral rights under the Copyright Act 1968 (Cth) in relation to Your Content.
                        You represent and warrant to us that you have all necessary rights to grant the licences and to provide the consents set out in this clause.
                        You agree not to copy or otherwise use any other user's Content without their express written consent.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >PRIVACY</h3>
                    </div>
                    <div className="content padding fontSize">
                        Through your use of the web app items, you may provide us with some of your personal information. By using the web app items, you authorise us to use your information in accordance with Switzerland's laws.
                        Please be sensible when providing your personal information to other Users.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >REVERSE ENGINEERING AND SECURITY</h3>
                    </div>
                    <div className="content padding fontSize">
                        You agree not to do or attempt to do any of the following:
                        <br></br>
                        <br></br>
                        (a) reverse engineer, disassemble or hack any code or software from or on the app items;
                        <br></br>
                        (b) violate the security of the web app items through any unauthorised access, circumvention of encryption or other security tools, scraping, data mining or interference with any host, user or network; or
                        <br></br>
                        (c) illicitly collect or transmit information about other Users.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >SPAM POLICY</h3>
                    </div>
                    <div className="content padding fontSize">
                        You are prohibited from using the web app items for the purpose of gathering email addresses and/or personal information from people, companies or other organisations and/or for sending bulk emails or unsolicited emails.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >TERMINATION</h3>
                    </div>
                    <div className="content padding fontSize">
                        We may immediately terminate these terms, as between you and us, at any time, with or without cause.
                        We specifically reserve the right to terminate these terms, as between you and us, if you breach these terms in any way.
                        These terms terminate automatically if we cease to operate the app for any reason.
                        If you have registered for an account with us, you may terminate these terms at any time by contacting us and requesting termination.
                        Upon the termination of these terms, any provisions which would by their nature be reasonably expected to survive termination shall remain in full force and effect, including but not limited to our exclusions of liability as set out in the Exclusion of Liability clause.
                        If we terminate or suspend your account you agree not to register a new account on the app under a different identity or to recommence using the web app without our express permission in writing.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >OTHER ACTION</h3>
                    </div>
                    <div className="content padding fontSize">
                        We reserve the right to take any of the following actions in our sole discretion:
                        <br></br>
                        <br></br>
                        (a) monitor, review, edit or delete any of Your Content, whether or not you have breached these terms;
                        <br></br>
                        (b) record any correspondence that occurs in public sections of the app;
                        <br></br>
                        (c) review any allegations about breaches of these terms, and determine in our sole discretion whether to take any action in response to those alleged breaches, including removal of any Content in relation to those alleged breaches;
                        <br></br>
                        (d) determine in our sole discretion whether to terminate your or another user's access to the app items or any particular part or parts of the web app items; and
                        <br></br>
                        (e) close any account which has not been accessed in at least 12 months.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >GENERAL PROVISIONS</h3>
                    </div>
                    <div className="content padding fontSize">
                        Swiss Consumer Law:You may have certain rights, warranties, guarantees and remedies under the Australian Consumer Law, which is contained in the Competition and Consumer Act 2010 (Cth), and, if applicable, these rights, warranties, guarantees and remedies may not be restricted, modified or excluded by us. Our liability to you is governed solely by these terms and the Australian Consumer Law, to the extent that it applies.
                        applicable law: Your use of the app items is subject to the laws of Queensland and each party submits to the non-exclusive jurisdiction of the courts of Queensland.
                        No assignment: You must not assign, sub-licence or otherwise deal in any way with your rights under these terms without our prior written consent.
                        Severability: If any clause or sub-clause of these terms is held to be invalid or unenforceable, it is to be read down or severed such that the remaining clauses and sub-clauses will be enforced to the maximum extent possible. In such circumstances, the remainder of these terms shall continue in full force and effect.
                        No waiver: In the event that we fail to enforce any provision of these terms, such failure shall not constitute a waiver of any future enforcement of that provision or of any other provision. Waiver of any clause or sub-clause of these terms will not constitute a waiver of any other clause or sub-clause.
                        No partnership or agency: Nothing in these terms is intended to give rise to a partnership or agency relationship between you and us.
                        Notices:We may serve legal notices on you at the email address that you provide to us upon registration or that we receive from any Digital Platform (or such updated email address notified by you to us or to any Digital Platform). You may serve any legal notices on us at support@Gimme.com.au (or such updated email address notified by us to you) or at Gimme Pty Ltd, c/- The Precinct, TC Beirne Building, Level 3/315 Brunswick St, Fortitude Valley QLD 4006. Email notices will be deemed to have been received upon transmission confirmed by a delivery receipt. Hard copy notices sent by prepaid post in Australia will be deemed to have been received five (5) business days after posting.
                        Separate agreements: You may have other legal agreements with us. Those other legal agreements are separate from and are in addition to these terms. These terms do not alter, amend, revise or replace the terms of any other legal agreements you may have with us.
                        Disputes: If any dispute arises between you and us under these terms we will try to resolve it directly between you and us before resorting to legal action and we ask that you do the same.
                    </div>
                </OpenCloseBox>
                <OpenCloseBox>
                    <div className="title padding fontSize">
                        <h3 >CONTACT US</h3>
                    </div>
                    <div className="content padding fontSize">
                        You can contact us at:
                        <br></br>
                        <br></br>
                        Gimme Limited
                        <br></br>
                        Heinrichstrasse 200
                        <br></br>
                        8005 Zurich
                        <br></br>
                        Switzerland
                        <br></br>
                        <br></br>
                        gimme.switzerland@gmail.com
                    </div>
                </OpenCloseBox>
            </div>


            <FooterElement></FooterElement>
        </ContainerTermsOfUse>
    );
}

export default FAQ;