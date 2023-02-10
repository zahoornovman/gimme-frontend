//react
import { useState, useEffect } from "react";

//react redux
import { useSelector, useDispatch } from "react-redux";

//components
import { baseUrl } from "../../../baseurl";

//styled components
import { SearchContainer } from "./styles";

//selectors
import { selectOffers, selectTags } from "../../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../../hooks/tagsFetch";

//slices
import { setOffersInSlice } from "../../../slices/offers/offersSlice";

function Search() {
  //hooks to keep track of tags and search params locally
  const [tags, setTagsBackground] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  //variables to  provide data from redux store
  const storeTags = useSelector(selectTags);

  const dispatch = useDispatch();

  // Calling tags
  useSettingTags();

  //called when tags in redux store change
  useEffect(() => {
    //console.log("Entering tag changing useeffect");
    setTagsBackground(storeTags);
    //console.log(storeTags);
  }, [storeTags]);

  // calling endpoint with title and tag params
  const handleSubmit = (event) => {
    event.preventDefault();
    searchOffers(event.target[0].value, event.target[1].value);
  };

  //Getting offers based on search params
  const searchOffers = (tagParam, titleParam) => {
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
        dispatch(setOffersInSlice(result));
      })
      .catch((error) =>
        setErrorMessage(
          "An error occurred while submitting the form. Please try again."
        )
      );
  };

  return (
    <SearchContainer>
      {errorMessage !== null && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        {tags === "notFetched" ? (
          <span>Loading..</span>
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
    </SearchContainer>
  );
}

export default Search;
