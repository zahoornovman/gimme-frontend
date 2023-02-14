//styled components
import { ContainerRequestCardStyled } from "./styles";

//hooks
import { useNavigate } from "react-router-dom";

//images
import no_picture from '../../images/no_picture.jpeg';

function RequestCard(props) {
  const navigate = useNavigate();

  //Navigation to individual Request display
  const handleClickNavigate = (pk) => {
    navigate(`/requests/${pk}`);
  };
  return (
    <ContainerRequestCardStyled
      onClick={() => handleClickNavigate(props.obj.id)}
    >
      {props.obj.images[0] ? (
        <div className="imageBox">
          <img src={props.obj.images[0].images} alt='' /> 
        </div>
      ) : (
        <img src={no_picture} />
      )}

      <h2>{props.obj.title}</h2>
    </ContainerRequestCardStyled>
  );
}

export { RequestCard };
