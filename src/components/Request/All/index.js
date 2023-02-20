//components
import { baseUrl } from "../../../baseurl";
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";

//react hooks
import { useEffect, useState } from "react";

//react redux hooks
import { useDispatch, useSelector } from "react-redux";

//Header 2
import { Header2 } from "../../../styles/MasterStyles";

//selectors
import { selectRequests, selectTags } from "../../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../../hooks/tagsFetch";

//Text Button
import { TextButton } from "../../../styles/MasterStyles";

//slices
import {
  setMoreRequests,
  setRequestsInSlice,
} from "../../../slices/requests/requestsSlice";

//styled components import
import { ContainerAllRequests, ListRequestsContainer } from "./styles";
import { RequestCard } from "../../../elements/RequestCard/requestCard";

function AllRequests() {
  //useState hook for requests tags and errors
  const [requestList, setRequestList] = useState([]);
  const [tags, setTagsBackground] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [next, setNext] = useState(null);

  // let next;

  const dispatch = useDispatch();

  //Variables with redux store data
  const storeTags = useSelector(selectTags);
  const requests = useSelector(selectRequests);

  //Requests on first load
  useEffect(() => {
    getAllRequests();
  }, []);

  //Called when requests in redux store change
  useEffect(() => {
    //console.log("Request in store changed");
    setRequestList(requests);
  }, [requests]);

  // Calling tags
  useSettingTags();

  //Called when tags in redux store change
  useEffect(() => {
    setTagsBackground(storeTags);
  }, [storeTags]);

  //  Getting Requests from server
  const getAllRequests = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const url = `${baseUrl}/backend/api/wants/`;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setNext(result.next);
        dispatch(setRequestsInSlice(result));
      })
      .catch((error) =>
        setErrorMessage(
          "An error occurred while submitting the form. Please try again."
        )
      );
  };

  const fetchMoreRequests = () => {
    console.log("More");
    console.log(next);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(next, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setNext(result.next);
        dispatch(setMoreRequests(result));
      })
      .catch((error) =>
        setErrorMessage(
          "An error occurred while submitting the form. Please try again."
        )
      );
  };

  return (
    <>
      <Header />
      <ContainerAllRequests>
        <Header2>Latest Requests</Header2>
        {requestList.length === 0 && (
          <div>
            No Search Results found. Please try a different search criteria..
          </div>
        )}
        {errorMessage !== null ? (
          <div>{errorMessage}</div>
        ) : (
          <ListRequestsContainer>
            {requestList === "notFetched" ? (
              <div>Loading....</div>
            ) : (
              requestList.map((obj) => <RequestCard key={obj.id} obj={obj} />)
            )}
          </ListRequestsContainer>
        )}
        {next !== null && (
          <TextButton className="buttonMore" onClick={fetchMoreRequests}>
            Click for more...
          </TextButton>
        )}
      </ContainerAllRequests>
      <FooterElement />
    </>
  );
}

export default AllRequests;
