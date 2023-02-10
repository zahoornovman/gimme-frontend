//styled components
import { ContainerOfferCardStyled } from "./styles";

//images
import no_picture from "../../images/no_picture.jpeg";

//hooks
import { useNavigate } from "react-router-dom";

function OfferCard(props) {
  const navigate = useNavigate();

  //Navigation to individual Offer display
  const handleClickNavigate = (pk) => {
    navigate(`/offers/${pk}`);
  };

  // individual card displayed with image
  return (
    <ContainerOfferCardStyled onClick={() => handleClickNavigate(props.obj.id)}>
      {props.obj.images[0] ? (
        <img src={props.obj.images[0]} />
      ) : (
        <img src={no_picture} />
      )}
      <h2>{props.obj.title}</h2>
    </ContainerOfferCardStyled>
  );
}

export { OfferCard };
