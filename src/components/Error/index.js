import { useNavigate } from "react-router-dom";
import FooterElement from "../../elements/Footer";
import { EmjoyContainer, Header1, TextButton, TextContainer } from "../../styles/MasterStyles";
import { MainError } from "./styles";

let date = new Date
let hour = date.getHours()

function Error() {
  const navigate = useNavigate()
  return (
    <MainError>
      <div
        className="errorHeader"
      >
        {
          hour < 12
            ?
            <Header1
              className="fontSize"
            >Good morning!</Header1>
            :
            hour < 17
              ?
              <Header1
                className="fontSize"
              >Good afternoon!</Header1>
              :
              hour < 22
                ?
                <Header1
                  className="fontSize"
                >Good evening!</Header1>
                :
                <Header1
                  className="fontSize"
                >Good night!</Header1>
        }
      </div>
      <div
        className="errorContent"
      >
        <TextContainer
          className="errorMessage fontSize"
        >
          Sorry, this page doesn't exist.
        </TextContainer>
        <EmjoyContainer
          className="errorEmojy"
        >
          😝
        </EmjoyContainer>
        <TextButton
        className="errorButton fontSize"
        onClick={() => { navigate(-1) }}
        >
          Go back to previous page
        </TextButton>
      </div>
      <FooterElement></FooterElement>
    </MainError>
  );
}

export default Error;