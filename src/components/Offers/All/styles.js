import styled from 'styled-components';

export const ContainerAllOffers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  justify-content: center;

  
  .buttonMore {
    color: black;
    margin-bottom: 50px;
    margin-top: 20px;
    border-style: none;
    padding: 10px;
  }
  /* border: 5px solid red; */
`;

export const ListOffersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 2rem;
  justify-items: center;
  align-items: center;
`;


