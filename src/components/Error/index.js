import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import FooterElement from "../../elements/Footer";
import { EmjoyContainer, Header1, TextButton, TextContainer } from "../../styles/MasterStyles";
import { MainError } from "./styles";
import { statementPage404 } from "../../elements/Statements/statements";

let date = new Date
let hour = date.getHours()

function Error() {
  const userFirstname = useSelector((state) => state.user.first_name)
  const navigate = useNavigate()
  return (
    <MainError>
      <div
        className="errorHeader"
      >
        {
          hour < 12
            ?
            userFirstname === "NoNa"
              ?
              <Header1
                className="fontSize"
              >Good morning!</Header1>
              :
              <Header1
                className="fontSize"
              >{`Good morning ${userFirstname}!`}</Header1>
            :
            hour < 17
              ?
              userFirstname === "NoNa"
                ?
                <Header1
                  className="fontSize"
                >Good afternoon!</Header1>
                :
                <Header1
                  className="fontSize"
                >{`Good afternoon ${userFirstname}!`}</Header1>
              :
              hour < 22
                ?
                userFirstname === "NoNa"
                  ?
                  <Header1
                    className="fontSize"
                  >Good evening!</Header1>
                  :
                  <Header1
                    className="fontSize"
                  >{`Good evening ${userFirstname}!`}</Header1>
                :
                userFirstname === "NoNa"
                  ?
                  <Header1
                    className="fontSize"
                  >Good night!</Header1>
                  :
                  <Header1
                    className="fontSize"
                  >{`Good night ${userFirstname}!`}</Header1>
        }
      </div>
      <div
        className="errorContent"
      >
        <TextContainer
          className="errorMessage fontSize"
        >
          {statementPage404}
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