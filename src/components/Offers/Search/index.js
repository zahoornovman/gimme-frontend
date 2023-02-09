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

import { setOffersInSlice } from "../../../slices/offers/offersSlice";

function Search() {
  const [tags, setTagsBackground] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const storeTags = useSelector(selectTags);
  const dispatch = useDispatch();

  // Calling tags
  useSettingTags();

  //when tags store changes
  useEffect(() => {
    console.log("Entering tag changing useeffect");
    setTagsBackground(storeTags);
    console.log(storeTags);
  }, [storeTags]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    searchOffers(event.target[0].value, event.target[1].value);
  };

  const searchOffers = (tagParam, titleParam) => {
    //var raw = "";

    const requestOptions = {
      method: "GET",
      //body: raw,
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
      .catch((error) => console.log("error", error));
  };

  return (
    <SearchContainer>
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
    </SearchContainer>
  );
}

export default Search;
