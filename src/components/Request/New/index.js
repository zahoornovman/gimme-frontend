import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerNewRequest } from "./styles";

function NewRequest() {
  return (
    <ContainerNewRequest>
      <Header></Header>
      <h2>New Requests</h2>
      <FooterElement></FooterElement>
    </ContainerNewRequest>
  );
}

export default NewRequest;
