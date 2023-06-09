//react
import { useState, useEffect } from "react";

//react redux
import { useSelector, useDispatch } from "react-redux";

// react router dom
import { useNavigate, useHistory } from "react-router-dom";

//components
import { baseUrl } from "../../baseurl";

//styled components
import { SearchOfferContainer } from "./styles";

//selectors
import { selectTags } from "../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../hooks/tagsFetch";

//slices
import { setOffersInSlice } from "../../slices/offers/offersSlice";

function SearchOffers() {
  //Hooks to keep track of tags and search params locally
  const [tags, setTagsBackground] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  //Variables to  provide data from redux store
  const storeTags = useSelector(selectTags);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calling tags
  useSettingTags();

  //Called when tags in redux store change
  useEffect(() => {
    setTagsBackground(storeTags);
  }, [storeTags]);

  // Calling endpoint with title and tag params
  const handleSubmit = (event) => {
    event.preventDefault();
    searchOffers(event.target[0].value, event.target[1].value);
    navigate("/offers/searchResults");
  };

  //Getting offers based on search params
  const searchOffers = (tagParam, titleParam) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `${baseUrl}/backend/api/haves/?title=${titleParam}&tag=${tagParam}`,
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
    <SearchOfferContainer>
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
          placeholder="Enter Offer title..."
        />
        <button type="submit">Search</button>
      </form>
    </SearchOfferContainer>
  );
}

export default SearchOffers;
