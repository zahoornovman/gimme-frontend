import { ContainerOfferCardStyled } from "./styles";
import no_picture from "../../images/no_picture.jpeg"

function OfferCard(props) {
  console.log(props);
  return (
    <ContainerOfferCardStyled>
      {props.obj.images[0] ? (
        <img src={props.obj.images[0]} />
      ) : (
        <img src={no_picture}/>
      )}
      <h2>{props.obj.title + " " +props.obj.id}</h2>
      {/* 
      <img src={props.obj.images[0].images} alt="x" /> 
      <div>{props.obj.title}</div>
      */}
    </ContainerOfferCardStyled>
  );
}

export { OfferCard };
