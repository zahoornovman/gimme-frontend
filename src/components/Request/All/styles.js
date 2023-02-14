import styled from "styled-components";

export const ContainerAllRequests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListRequestsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* max-width: 1170px; */
  margin: 5rem auto;
  gap: 2rem;
  justify-items: center;
  align-items: center;
`;
