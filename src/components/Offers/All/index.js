//react
import { useEffect, useState } from "react";

//react redux
import { useDispatch, useSelector } from "react-redux";

//components
import { baseUrl } from "../../../baseurl";
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import Search from "../Search";

//styled components import
import { ContainerAllOffers, ListOffersContainer } from "./styles";
import { OfferCard } from "../../../elements/OfferCard/offerCard";

//selectors
import { selectOffers, selectTags } from "../../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../../hooks/tagsFetch";

//slices
import { setOffersInSlice } from "../../../slices/offers/offersSlice";

function AllOffers() {
  // userState hook to keep track of all Offers and tags
  const [offerList, setOfferList] = useState([]);
  const [tags, setTagsBackground] = useState([]);

  const dispatch = useDispatch();

  //variables to  provide data from redux store
  const storeTags = useSelector(selectTags);
  const offers = useSelector(selectOffers);

  //offers loaded first time
  useEffect(() => {
    console.log("Entering component did load");
    getAllOffers();
    //tempOfferList();
  }, []);

  //Called when offers in redux store change
  useEffect(() => {
    console.log("entering useeffect to get new offers from store");
    setOfferList(offers);
    console.log(`offers: ${offers} `);
  }, [offers]);

  // Calling tags
  useSettingTags();

  //called when tags is redux store change
  useEffect(() => {
    console.log("Entering tag changing useeffect");
    setTagsBackground(storeTags);
  }, [storeTags]);

  //temp setup. to be removed later
  // const tempOfferList = () => {
  //   setOfferList(x);
  // };

  // Getting Offers from server
  const getAllOffers = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseUrl}/backend/api/haves/`, requestOptions)
      .then((response) => response.json())
      .then((result) => dispatch(setOffersInSlice(result)))
      .catch((error) => console.log("error", error));
  };

  return (
    <ContainerAllOffers>
      <Header />
      <Search />
      <h2>Latest offers</h2>
      <ListOffersContainer>
        {offerList === "" ? (
          <div>Loading....</div>
        ) : (
          offerList.map((obj) => <OfferCard key={obj.id} obj={obj} />)
        )}
      </ListOffersContainer>
      <FooterElement />
    </ContainerAllOffers>
  );
}

export default AllOffers;
