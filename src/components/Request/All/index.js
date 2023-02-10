//components
import { baseUrl } from "../../../baseurl";
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerAllRequests, ListRequestsContainer } from "./styles";

//react
import { useEffect, useState } from "react";

//react redux
import { useDispatch, useSelector } from "react-redux";

//selectors
import { selectRequests, selectTags } from "../../../store/selectors/selectors";

function AllRequests() {
  const [requestList, setRequestList] = useState([]);
  const [tags, setTagsBackground] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const storeTags = useSelector(selectTags);
  const requests = useSelector(selectRequests);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseUrl}/backend/api/wants/`, requestOptions)
      .then((response) => response.json())
      .then((result) => dispatch(setRequestsInSlice(result)))
      .catch((error) =>
        setErrorMessage(
          "An error occurred while submitting the form. Please try again."
        )
      );
  }, []);

  useEffect(() => {
    setRequestList(requests);
  }, [requests]);

  // Calling tags
  useSettingTags();

  //called when tags is redux store change
  useEffect(() => {
    setTagsBackground(storeTags);
  }, [storeTags]);

  return (
    <ContainerAllRequests>
      <Header />
      <h2>Latest Requests</h2>
      <ListRequestsContainer>
        {requestList === "" ? (
          <div>Loading....</div>
        ) : (
          requestList.map((obj) => {
            console.log(obj);
          })
        )}
      </ListRequestsContainer>
      <FooterElement />
    </ContainerAllRequests>
  );
}

export default AllRequests;
