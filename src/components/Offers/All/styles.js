import styled from 'styled-components';

export const ContainerAllOffers = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  /* border: 5px solid red; */
`;

export const ListOffersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 90%;
  max-width: 1170px;
  margin: 5rem auto;
  gap: 2rem;
  /* border: 2px solid pink; */
`;
