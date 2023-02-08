//react
import { useEffect, useState } from "react";

//react redux
import { useDispatch, useSelector } from "react-redux";

//components import
import { baseUrl } from "../../../baseurl";
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";

//styled components import
import { ContainerAllOffers, ListRequestsContainer } from "./styles";
import { OfferCard } from "../../../elements/OfferCard/offerCard";

//selectors
import {
  selectAllOffers,
  selectTags,
} from "../../../store/selectors/selectors";

//custom hooks
import { useSettingTags } from "../../../hooks/tagsFetch";

function AllOffers() {
  // userState hook to keep track of all Offers and tags
  const [offerList, setOfferList] = useState([]);
  const [tags, setTagsBackground] = useState([]);

  const tag = useSelector(selectTags);
  const x = useSelector(selectAllOffers);

  //offers loaded one time for now
  useEffect(() => {
    //getAllOffers();
    tempOfferList();
  }, []);

  // Calling tags
  useSettingTags();

  //when tags store changes
  useEffect(() => {
    console.log("Entering tag changing useeffect");
    setTagsBackground(tag);
  }, [tag]);

  //temp setup. to be removed later
  const tempOfferList = () => {
    setOfferList(x);
  };

  // Getting Offers from server
  const getAllOffers = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseUrl}/backend/api/haves/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setOfferList(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <ContainerAllOffers>
      <Header />
      <h2>Latest offers</h2>
      <ListRequestsContainer>
        {offerList == "" && <div>Loading....</div>}
        {offerList.map((obj) => (
          <OfferCard key={obj.id} obj={obj} />
        ))}
      </ListRequestsContainer>
      <FooterElement />
    </ContainerAllOffers>
  );
}

export default AllOffers;
