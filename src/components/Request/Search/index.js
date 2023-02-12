//react hooks
import { useEffect, useState } from "react";

//react redux hooks
import { useSelector } from "react-redux";

//components
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { RequestCard } from "../../../elements/RequestCard/requestCard";

//styled components import
import {
  ContainerSearchListRequests,
  ListRequestsSearchContainer,
} from "./styles";

//selectors
import { selectRequests } from "../../../store/selectors/selectors";

function RequestsSearchResults() {
  // useState hook
  const [requestSearchList, setRequestSearchList] = useState([]);

  // Variables to provide data from redux store
  const requests = useSelector(selectRequests);

  // Called when offers in redux store change
  useEffect(() => {
    setRequestSearchList(requests);
  }, [requests]);

  return (
    <ContainerSearchListRequests>
      <Header />
      <h2>Request Search Results</h2>
      {requestSearchList.length === 0 && (
        <div>
          No Search Results found. Please try a different search criteria...
        </div>
      )}
      <ListRequestsSearchContainer>
        {requestSearchList === "notFetched" ? (
          <div>Loading....</div>
        ) : (
          requestSearchList.map((obj) => <RequestCard key={obj.id} obj={obj} />)
        )}
      </ListRequestsSearchContainer>
      <FooterElement />
    </ContainerSearchListRequests>
  );
}

export default RequestsSearchResults;
