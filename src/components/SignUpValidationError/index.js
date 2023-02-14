import FooterElement from "../../elements/Footer";
import Header from "../../elements/Header";
import { ContainerSingUpValidationError} from "./styles"
import HomeContactButtonSection from "../../elements/HomeContactButtonSection";

function SingUpValidationError() {
    return (
        <ContainerSingUpValidationError>
            <Header></Header>
            <div className="passwordForgotenMessage fontSize">
                Please contact our backoffice, as an error has occured. They will set up the account for you.
            </div>
            <HomeContactButtonSection></HomeContactButtonSection>
            <FooterElement></FooterElement>
        </ContainerSingUpValidationError>
    );
}

export default SingUpValidationError;