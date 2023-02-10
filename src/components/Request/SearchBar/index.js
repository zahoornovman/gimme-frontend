//react
import { useState, useEffect } from "react";

//react redux
import { useSelector, useDispatch } from "react-redux";

//components
import { baseUrl } from "../../../baseurl";

//styled components
import { SearchRequestsContainer } from "./styles";

//selectors
import { selectTags } from "../../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../../hooks/tagsFetch";

//slices
import { setRequestsInSlice } from "../../../slices/requests/requestsSlice";

function SearchRequests() {
  //hooks to keep track of tags and search params locally
  const [tags, setTagsBackground] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  //variables to  provide data from redux store
  const storeTags = useSelector(selectTags);

  const dispatch = useDispatch();

  // Calling tags
  useSettingTags();

  //called when tags in redux store change
  useEffect(() => {
    console.log("Entering tag changing useeffect");
    setTagsBackground(storeTags);
    console.log(storeTags);
  }, [storeTags]);

  // calling endpoint with title and tag params
  const handleSubmit = (event) => {
    event.preventDefault();
    searchRequests(event.target[0].value, event.target[1].value);
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
      .catch((error) => console.log("error", error));
  };

  return (
    <SearchRequestsContainer>
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
          placeholder="Enter part of the title..."
        />
        <button type="submit">Search</button>
      </form>
    </SearchRequestsContainer>
  );
}

export default SearchRequests;
