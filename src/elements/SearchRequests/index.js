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
import { selectLanguage } from "../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../hooks/tagsFetch";

//slices
import { setRequestsInSlice } from "../../slices/requests/requestsSlice";

import { FormattedMessage } from "react-intl";

function SearchRequests() {
  //variables to  provide data from redux store
  const storeTags = useSelector(selectTags);
  const storeLanguage = useSelector(selectLanguage);

  //hooks to keep track of tags and search params locally
  const [tags, setTagsBackground] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [language, setLanguage] = useState(storeLanguage);

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

  //useEffect to be triggered when language is changed
  useEffect(() => {
    console.log("Entering use Effect for language on welcome page");
    setLanguage(storeLanguage);
    console.log(language);
  }, [storeLanguage]);

  return (
    <SearchRequestsContainer>
      {errorMessage !== null && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        {tags === "notFetched" ? (
          <span>loading..</span>
        ) : (
          <select name="tag" id="tags">
            <option value="">
              <FormattedMessage id="defaultOption" />
            </option>
            {tags.map((obj) => (
              <option key={obj.id} value={obj.id}>
                {<FormattedMessage id={obj.title} />}
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
        <button type="submit">
          <FormattedMessage id="searchButton" />
        </button>
      </form>
    </SearchRequestsContainer>
  );
}

export default SearchRequests;
