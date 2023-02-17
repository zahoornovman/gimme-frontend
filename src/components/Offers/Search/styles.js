import styled from "styled-components";

export const ContainerSearchListOffers = styled.div`
  margin-top: 50px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
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
