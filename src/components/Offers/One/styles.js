import styled from 'styled-components';

export const ContainerOneOffer = styled.div`
  
  margin-top: ${(props) => props.theme.size.xxxxxxxl};
margin-bottom: ${(props) => props.theme.size.xxxxxxxl};
.contentSection{
  .imageGallery{
    border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
    height: 200px;
    width: 200px;
    .cheveronButton{
      height: 20px;
      cursor: pointer;
    }

  }
}
.buttonSection{
  .deleteButton{
    background-color: ${(props) => props.theme.colors.color1};
    color: ${(props) => props.theme.colors.color3};
  }
}

  
`;
