import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../baseurl";
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { ContainerAllOffers, ListRequestsContainer } from "./styles";
//import { setAllOffers } from "../../../features/offers/offersSlice";
import { OfferCard } from "../../../elements/OfferCard/offerCard";

function AllOffers() {
  // userState hook to keep track of all Offers
  const [offerList, setOfferList] = useState([]);

  let x = useSelector((state) => state.offers.adds_offered);

  //offers loaded one time for now
  useEffect(() => {
    //getAllOffers();
    tempOfferList();
    console.log(offerList);
  }, []);

  const tempOfferList = () => {
    setOfferList(x);
    console.log(typeof x);
  };

  const getAllOffers = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseUrl}/haves/`, requestOptions)
      .then((response) => response.json())
      .then((result) => setOfferList(result))
      .catch((error) => console.log("error", error));
  };

  console.log(offerList);

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
