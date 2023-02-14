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
    const accessToken = useSelector((state) => state.user.acces)
    const maxLengthMessage = 300
    const [messageStatus, setMessageStatus] = useState("draft")
    const [currentLengthMessage, setCurrentLengthMessage] = useState(0)
    const [receiverId, setReceiverId] = useState("")


    const handleChangeMessage = (event) => {
        setCurrentLengthMessage(event.target.value.length)
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
                    setReceiverId(Number(result.author.id))
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
        <ContainerMessageService>
            <Header></Header>
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
                                onClick={()=> navigate("/requests/all")}
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
                                            <label
                                                htmlFor="message">Message:</label>
                                            <input
                                                onChange={handleChangeMessage}
                                                maxLength={maxLengthMessage}
                                                id="message"></input>
                                            <div className="fontSize">{`(${currentLengthMessage}/${maxLengthMessage})`}</div>
                                        </div>
                                        <TextButton
                                            className="fontSize"
                                            onClick={handleSend}
                                        >
                                            Send
                                        </TextButton>
                                    </div>

            }
            <FooterElement></FooterElement>
        </ContainerMessageService>
    );
}

export default MessageService;