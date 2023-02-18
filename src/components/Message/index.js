import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { TextButton } from "../../styles/MasterStyles";
import { ContainerMessageService } from "./styles";
import { baseUrl } from "../../baseurl";
import { useNavigate } from "react-router-dom";


function MessageService() {
    const navigate = useNavigate()
    const addSubject = useSelector((state) => state.message)
    const userFirstName = useSelector((state) => state.user.first_name)
    const user = useSelector((state) => state.user)
    const accessToken = useSelector((state) => state.user.acces)
    const maxLengthMessage = 300
    const [messageStatus, setMessageStatus] = useState("draft")
    const [currentLengthMessage, setCurrentLengthMessage] = useState(0)
    const [receiverId, setReceiverId] = useState("")
    const [receiverUserName, setReceiverUserName] = useState("")
    const interestedInText = "I'm interested in it. Please contact me."
    const availableText = "Is it still available?"


    const handleChangeMessage = (event) => {
        setCurrentLengthMessage(event.target.value.length)
    }
    const handleAvailable = () => {
        setMessageStatus("draft")
        
        
            setCurrentLengthMessage(0)

            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${accessToken}`);
            myHeaders.append("Content-Type", "application/json");

            if (addSubject.accessedFromOfferOrRequest === "have") {
                var raw = JSON.stringify({
                    "receiver_id": receiverId,
                    "sender": "",
                    "receiver": {
                        "id": Number(addSubject.accessedFromID),
                        "type": "have"
                    },
                    "content": `${availableText}`
                });
            }
            else {

                var raw = JSON.stringify({
                    "receiver_id": receiverId,
                    "sender": "",
                    "receiver": {
                        "id": Number(addSubject.accessedFromID),
                        "type": "want"
                    },
                    "content": `${availableText}`
                });
            }

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`${baseUrl}/backend/api/message/`, requestOptions)
                .then(response => {

                    if (response.status === 201) {
                        setMessageStatus("sent")
                    }
                    else {
                        setMessageStatus("error")
                    }
                })


                .catch(() => {

                    setMessageStatus("error")
                });      
    }

    const handleContactMe = () => {
        setMessageStatus("draft")
        
        
            setCurrentLengthMessage(0)

            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${accessToken}`);
            myHeaders.append("Content-Type", "application/json");

            if (addSubject.accessedFromOfferOrRequest === "have") {
                var raw = JSON.stringify({
                    "receiver_id": receiverId,
                    "sender": "",
                    "receiver": {
                        "id": Number(addSubject.accessedFromID),
                        "type": "have"
                    },
                    "content": `${interestedInText}`
                });
            }
            else {

                var raw = JSON.stringify({
                    "receiver_id": receiverId,
                    "sender": "",
                    "receiver": {
                        "id": Number(addSubject.accessedFromID),
                        "type": "want"
                    },
                    "content": `${interestedInText}`
                });
            }

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`${baseUrl}/backend/api/message/`, requestOptions)
                .then(response => {

                    if (response.status === 201) {
                        setMessageStatus("sent")
                    }
                    else {
                        setMessageStatus("error")
                    }
                })


                .catch(() => {

                    setMessageStatus("error")
                });      
    }
    const handleSend = () => {
        setMessageStatus("draft")
        if (document.getElementById('message').value === "") {
            setMessageStatus("messageRequired")
        }
        else {
            setCurrentLengthMessage(0)

            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${accessToken}`);
            myHeaders.append("Content-Type", "application/json");

            if (addSubject.accessedFromOfferOrRequest === "have") {
                var raw = JSON.stringify({
                    "receiver_id": receiverId,
                    "sender": "",
                    "receiver": {
                        "id": Number(addSubject.accessedFromID),
                        "type": "have"
                    },
                    "content": `${document.getElementById('message').value}`
                });
            }
            else {

                var raw = JSON.stringify({
                    "receiver_id": receiverId,
                    "sender": "",
                    "receiver": {
                        "id": Number(addSubject.accessedFromID),
                        "type": "want"
                    },
                    "content": `${document.getElementById('message').value}`
                });
            }

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`${baseUrl}/backend/api/message/`, requestOptions)
                .then(response => {

                    if (response.status === 201) {
                        setMessageStatus("sent")
                    }
                    else {
                        setMessageStatus("error")
                    }
                })


                .catch(() => {

                    setMessageStatus("error")
                });

        }
    }

    useEffect(() => {
        setMessageStatus("draft")
        if (addSubject.accessedFromOfferOrRequest === "have") {


            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(`${baseUrl}/backend/api/haves/${Number(addSubject.accessedFromID)}/`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setReceiverId(Number(result.author.id))
                    setReceiverUserName(result.author.user.username)
                })
                .catch(() => {

                    setMessageStatus("ReceiverNotAccessible")
                });
        }
        else {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${accessToken}`);



            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`${baseUrl}/backend/api/wants/${Number(addSubject.accessedFromID)}/`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setReceiverId(Number(result.author.id))
                })
                .catch(error => {
                    console.log('error', error)
                    setMessageStatus("ReceiverNotAccessible")
                });
        }
    }, [])

    return (
        <><Header></Header>
        <ContainerMessageService>
            
            {
                userFirstName === "NoNa"
                    ?
                    <div className="fontSize accessDenied">
                        Please sign in to send a message. 😋
                    </div>
                    :
                    addSubject.accessedFromOfferOrRequest === ""
                        ?
                        <div className="noAddSelected fontSize">
                            <div>A message is dedicated to a speficic offer or request. Please select an offer or a request to which your message is dedicated. 😏</div>
                            <TextButton
                                onClick={() => navigate("/offers/all")}
                                className="fontSize">
                                Select an offer
                            </TextButton>
                            <TextButton
                                onClick={() => navigate("/requests/all")}
                                className="fontSize">
                                Select a request
                            </TextButton>
                        </div>
                        :
                        messageStatus === "sent"
                            ?
                            <div className="messageSent">
                                Your message has been sent. 😇 Please don't be disappointed, if you won't get a reply.
                            </div>
                            :
                            messageStatus === "error"
                                ?
                                <div className="messageError">
                                    Your message hasn't been sent. 😢 Please try again later.
                                </div>
                                :
                                messageStatus === "ReceiverNotAccessible"
                                    ?
                                    <div className="receiverNotAccessible">
                                        The receiver rejects obtaining any messages at the moment. 😱 We apologise for the inconvenience.
                                    </div>
                                    :
                                    <div className="messageContainer">
                                        <div className="fontSize">
                                            {
                                                messageStatus === "messageRequired"
                                                    ?
                                                    <div>
                                                        Please add a message before clicking on send. 😎
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                            <div className="fromContainer">
                                                <h4>from :</h4>
                                                <div className="fromContainerInformation">
                                                        <h4>{`${user.username}`}</h4>
                                                        <h4>{`${user.email}`}</h4>
                                                </div>
                                            </div>
                                            <div className="toContainer">
                                                <h4>to :</h4>
                                                <div className="toContainerInformation">
                                                    <div>
                                                        <div></div>
                                                        <h4>{`${receiverUserName}`}</h4>
                                                    </div>                                                    
                                                </div>
                                            </div>
                                            <div className="message">
                                                <label
                                                    htmlFor="message"></label>
                                                <h3>Message:</h3>
                                                <textarea
                                                    onChange={handleChangeMessage}
                                                    maxLength={maxLengthMessage}
                                                    id="message"></textarea>
                                                <div className="fontSize">{`(${currentLengthMessage}/${maxLengthMessage})`}</div>
                                                <TextButton
                                                    className="sendButton"
                                                    onClick={handleSend}
                                                >
                                                Send
                                                </TextButton>
                                                <div className="buttonSection">
                                                    <h3>Quick Reply</h3>
                                                    <TextButton
                                                        className="quickButton"
                                                        onClick={handleContactMe}>{interestedInText}</TextButton>
                                                    <TextButton
                                                        className="quickButton"
                                                        onClick={handleAvailable}
                                                    >{availableText}</TextButton>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

            }
            
        </ContainerMessageService>
        <FooterElement></FooterElement>
        </>
    );
}

export default MessageService;