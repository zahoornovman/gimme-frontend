import { ContainerRequestCardStyled } from "./styles";
import no_picture from "../../images/no_picture.jpeg";
import { useNavigate } from "react-router-dom";

function RequestCard(props) {
  const navigate = useNavigate();

  const handleClickNavigate = (pk) => {
    navigate(`/request/${pk}`);
  };
  return (
    <ContainerRequestCardStyled
      onClick={() => handleClickNavigate(props.obj.id)}
    >
      {/* {props.obj.images[0] ? (
        <img src={props.obj.images[0]} />
      ) : (
        <img src={no_picture} />
      )} */}
      <h2>{props.obj.title + " " + props.obj.id}</h2>
    </ContainerRequestCardStyled>
  );
}

export { RequestCard };
