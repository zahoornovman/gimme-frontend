import { ContainerOfferCardStyled } from "./styles";

function OfferCard(props) {
  console.log(props);
  return (
    <ContainerOfferCardStyled>
        <img src={props.obj.images[0]}/>
        <h2>{props.obj.title}</h2>
      {/* 
      <img src={props.obj.images[0].images} alt="x" /> 
      <div> OfferID: {props.obj.title}</div>
      */}
    </ContainerOfferCardStyled>
  );
}

export { OfferCard };
