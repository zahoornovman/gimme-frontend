import { useSelector } from "react-redux";
import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { ContainerMessageService } from "./styles";

function MessageService() {
  
    return ( 
        <ContainerMessageService>
            <Header></Header>
           
            <FooterElement></FooterElement>
        </ContainerMessageService>
     );
}

export default MessageService;