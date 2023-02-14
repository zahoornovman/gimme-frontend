import styled from "styled-components";

export const ContainerAllRequests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-top: 50px;

    .buttonMore {
    color: black;
    margin-bottom: 50px;
    margin-top: 20px;
    border-style: none;
    padding: 10px;
  }
`;

export const ListRequestsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 2rem;
  justify-items: center;
  align-items: center;
`;
