import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerAllRequests, ContainerListRequests } from "./styles";

function AllRequests() {
  return (
    <ContainerAllRequests>
      <Header/>
      <ContainerListRequests>
        <h2>All Requests</h2>
      </ContainerListRequests>
      <FooterElement />
    </ContainerAllRequests>
  );
}

export default AllRequests;
