import styled from 'styled-components';

export const ContainerMyOffers = styled.div`
  .any {
    margin-top: 50px;
    .objects {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 90%;
      max-width: 1170px;
      margin: 5rem auto;
      gap: 2rem;
    }
  }
`;
