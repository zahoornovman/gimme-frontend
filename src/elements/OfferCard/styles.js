import styled from 'styled-components';

export const ContainerOfferCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .imageBox {
    width: 400px;
    height: 295px;
    border: 1px solid grey;
    margin-bottom: 20px;
  }

  .imageBox img {
    width:100%;
    height: 100%;
    object-fit:cover;
    box-shadow: 2px 2px 5px black;
    cursor: pointer; 
  }

  img:hover {
    transform: scale (1.5);
  }
`;
