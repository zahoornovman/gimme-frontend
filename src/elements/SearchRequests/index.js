//react
import { useState, useEffect } from "react";

//react redux
import { useSelector, useDispatch } from "react-redux";

// react router dom
import { useNavigate } from "react-router-dom";

//components
import { baseUrl } from "../../baseurl";

//styled components
import { SearchRequestsContainer } from "./styles";

//selectors
import { selectTags } from "../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../hooks/tagsFetch";

//slices
import { setRequestsInSlice } from "../../slices/requests/requestsSlice";

function SearchRequests() {
  //hooks to keep track of tags and search params locally
  const [tags, setTagsBackground] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  //variables to  provide data from redux store
  const storeTags = useSelector(selectTags);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calling tags
  useSettingTags();

  //called when tags in redux store change
  useEffect(() => {
    console.log("Entering tag changing useeffect");
    setTagsBackground(storeTags);
  }, [storeTags]);

  // calling endpoint with title and tag params
  const handleSubmit = (event) => {
    event.preventDefault();
    searchRequests(event.target[0].value, event.target[1].value);
    navigate("/requests/searchResults");
  };

  //Getting Requests based on search params
  const searchRequests = (tagParam, titleParam) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `${baseUrl}/backend/api/wants/?title=${titleParam}&tag=${tagParam}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch(setRequestsInSlice(result));
      })
      .catch((error) =>
        setErrorMessage(
          "An error occurred while submitting the form. Please try again."
        )
      );
  };

  return (
    <SearchRequestsContainer>
      {errorMessage !== null && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        {tags === "notFetched" ? (
          <span>loading..</span>
        ) : (
          <select name="tag" id="tags">
            <option value="">All</option>
            {tags.map((key) => (
              <option key={key.id} value={key.id}>
                {`${key.title}`}
              </option>
            ))}
          </select>
        )}
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          placeholder="Enter Request title..."
        />
        <button type="submit">Search</button>
      </form>
    </SearchRequestsContainer>
  );
}

export default SearchRequests;
