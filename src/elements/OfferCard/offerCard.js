import { ContainerOfferCardStyled } from "./styles";
import no_picture from "../../images/no_picture.jpeg";
import { useNavigate } from "react-router-dom";

function OfferCard(props) {
  const navigate = useNavigate();

  console.log(props);

  const handleClickNavigate = (pk) => {
    navigate(`/offer/${pk}`);
  };
  return (
    <ContainerOfferCardStyled onClick={() => handleClickNavigate(props.obj.id)}>
      {props.obj.images[0] ? (
        <img src={props.obj.images[0]} />
      ) : (
        <img src={no_picture} />
      )}
      <h2>{props.obj.title + " " + props.obj.id}</h2>
      {/* 
      <img src={props.obj.images[0].images} alt="x" /> 
      <div>{props.obj.title}</div>
      */}
    </ContainerOfferCardStyled>
  );
}

export { OfferCard };
