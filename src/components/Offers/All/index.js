//react hooks
import { useEffect, useState } from "react";

//react redux hooks
import { useDispatch, useSelector } from "react-redux";

//components
import { baseUrl } from "../../../baseurl";
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";

//styled components import
import { ContainerAllOffers, ListOffersContainer } from "./styles";
import { OfferCard } from "../../../elements/OfferCard/offerCard";

//selectors
import { selectOffers, selectTags } from "../../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../../hooks/tagsFetch";

//slices
import {
  setOffersInSlice,
  setMoreOffers,
} from "../../../slices/offers/offersSlice";

//header
import { Header2 } from "../../../styles/MasterStyles";

//TextButton
import { TextButton } from '../../../styles/MasterStyles';

function AllOffers() {
  // useState hook to ffers, tags and errors
  const [offerList, setOfferList] = useState([]);
  const [tags, setTagsBackground] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [next, setNext] = useState(null);

  const dispatch = useDispatch();

  //Variables to  provide data from redux store
  const storeTags = useSelector(selectTags);
  const offers = useSelector(selectOffers);

  //Offers loaded first time
  useEffect(() => {
    getAllOffers();
  }, []);

  //Called when offers in redux store change
  useEffect(() => {
    setOfferList(offers);
  }, [offers]);

  // Calling tags
  useSettingTags();

  //called when tags is redux store change
  useEffect(() => {
    setTagsBackground(storeTags);
  }, [storeTags]);

  // Getting Offers from server
  const getAllOffers = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseUrl}/backend/api/haves/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setNext(result.next);
        dispatch(setOffersInSlice(result));
      })
      .catch((error) =>
        setErrorMessage(
          "An error occurred while submitting the form. Please try again."
        )
      );
  };

  const fetchMoreOffers = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(next, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setNext(result.next);
        dispatch(setMoreOffers(result));
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
      <ContainerAllOffers>
        {/* <Search /> */}
        <Header2>All offers</Header2>
        {offerList.length === 0 && (
          <div>
            No Search Results found. Please try a different search criteria..
          </div>
        )}
        {/* <div className="gridWithButton"> */}
        {errorMessage !== null ? (
          <div>{errorMessage}</div>
        ) : (
          <ListOffersContainer>
            {offerList === "notFetched" ? (
              <div>Loading....</div>
            ) : (
              offerList.map((obj) => <OfferCard key={obj.id} obj={obj} />)
            )}
          </ListOffersContainer>
        )}
        {next !== null && (
          <TextButton className="buttonMore" onClick={fetchMoreOffers}> Click for more...</TextButton>
        )}
        
      </ContainerAllOffers>
      <FooterElement />
    </>
  );
}

export default AllOffers;
