//react hooks
import { useEffect, useState } from "react";

//react redux hooks
import { useSelector } from "react-redux";

//components
import FooterElement from "../../../elements/Footer";
import Header from "../../../elements/Header";
import { OfferCard } from "../../../elements/OfferCard/offerCard";
import { Header2 } from '../../../styles/MasterStyles';

//styled components import
import { ContainerSearchListOffers, ListOffersSearchContainer } from "./styles";

//selectors
import { selectOffers } from "../../../store/selectors/selectors";

function OffersSearchResults() {
  // useState hook to offers, tags and errors
  const [offerSearchList, setOfferSearchList] = useState([]);

  // Variables to  provide data from redux store
  const offers = useSelector(selectOffers);

  // Called when offers in redux store change
  useEffect(() => {
    setOfferSearchList(offers);
  }, [offers]);

  return (
    <><Header />
    <ContainerSearchListOffers>
      
      <Header2>Offer Search Results</Header2>
      {offerSearchList.length === 0 && (
        <div>
          No Search Results found. Please try a different search criteria..
        </div>
      )}
      <ListOffersSearchContainer>
        {offerSearchList === "notFetched" ? (
          <div>Loading....</div>
        ) : (
          offerSearchList.map((obj) => <OfferCard key={obj.id} obj={obj} />)
        )}
      </ListOffersSearchContainer>
      
    </ContainerSearchListOffers>
    <FooterElement />
    </>
  );
}

export default OffersSearchResults;
