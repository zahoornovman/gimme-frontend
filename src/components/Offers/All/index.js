//react
import { useEffect, useState } from "react";

//react redux
import { useDispatch, useSelector } from "react-redux";

//component import
import { baseUrl } from "../../../baseurl";
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import Search from "../../../elements/OfferSearch/";

//styled components import
import { ContainerAllOffers, ListRequestsContainer } from "./styles";
import { OfferCard } from "../../../elements/OfferCard/offerCard";

//selectors
import { selectOffers, selectTags } from "../../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../../hooks/tagsFetch";

import { setOffersInSlice } from "../../../slices/offers/offersSlice";

function AllOffers() {
  // userState hook to keep track of all Offers and tags
  const [offerList, setOfferList] = useState([]);
  const [tags, setTagsBackground] = useState([]);

  const dispatch = useDispatch();

  const tag = useSelector(selectTags);
  const offers = useSelector(selectOffers);

  //offers loaded first time
  useEffect(() => {
    console.log("Entering component did load");
    getAllOffers();
    //tempOfferList();
  }, []);

  //when offers in store changes
  useEffect(() => {
    console.log("entering useeffect to get new offers from store");
    setOfferList(offers);
    console.log(`offers: ${offers} `);
  }, [offers]);

  // Calling tags
  useSettingTags();

  //when tags store changes
  useEffect(() => {
    console.log("Entering tag changing useeffect");
    setTagsBackground(tag);
  }, [tag]);

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
      {/* <Search list={offerList} /> */}
      <h2>Latest offers</h2>
      <ListRequestsContainer>
        {offerList === "" ? (
          <div>Loading....</div>
        ) : (
          offerList.map((obj) => <OfferCard key={obj.id} obj={obj} />)
        )}
      </ListRequestsContainer>
      <FooterElement />
    </ContainerAllOffers>
  );
}

export default AllOffers;
