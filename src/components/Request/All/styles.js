import styled from "styled-components";

export const ContainerAllRequests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  margin-top: 50px;
  margin-bottom: 50px;

    .buttonMore {
    margin-bottom: 50px;
    margin-top: 20px;
    border-style: none;
    padding: 10px;
    font-weight: 700;
    font-size: ${(props) => props.theme.size.s};
  }
`;

export const ListRequestsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 3rem;
  justify-items: center;
  align-items: center;
`;
