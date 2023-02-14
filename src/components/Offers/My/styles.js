import styled from 'styled-components';

export const ContainerMyOffers = styled.div`
  .any {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
    .objects {
      display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 2rem;
  justify-items: center;
  align-items: center;
    }
  }
`;
