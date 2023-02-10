//styled components
import { ContainerRequestCardStyled } from "./styles";

//hooks
import { useNavigate } from "react-router-dom";

function RequestCard(props) {
  const navigate = useNavigate();

  //Navigation to individual Request display
  const handleClickNavigate = (pk) => {
    navigate(`/request/${pk}`);
  };
  return (
    <ContainerRequestCardStyled
      onClick={() => handleClickNavigate(props.obj.id)}
    >
      <h2>{props.obj.title}</h2>
    </ContainerRequestCardStyled>
  );
}

export { RequestCard };
