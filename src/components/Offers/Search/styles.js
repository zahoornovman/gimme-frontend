import styled from "styled-components";

export const ContainerSearchListOffers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 5px solid red; */
`;

export const ListOffersSearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* max-width: 1170px; */
  margin: 5rem auto;
  gap: 2rem;
  justify-items: center;
  align-items: center;
  /* border: 2px solid pink; */
`;
