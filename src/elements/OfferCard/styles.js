import styled from 'styled-components';

export const ContainerOfferCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .offerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-shadow: 0px 0px 3px black;
    background-color: ${(props) => props.theme.colors.color8};
  }

  .offerContainer:hover {
    box-shadow: 0px 0px 7px black;
  }

  .imageBox {
    width: 400px;
    height: 295px;
    /* border: 1px solid grey; */
    margin-bottom: 20px;
  }

  .imageBox img {
    width:100%;
    height: 100%;
    object-fit:cover;
    /* box-shadow: 2px 2px 5px black; */
    cursor: pointer; 
  }

  h2 {
    margin-top: 15px;
    font-size: 20px;
  }
`;
