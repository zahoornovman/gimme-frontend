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
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 3rem;
  justify-items: center;
  align-items: center;
`;
