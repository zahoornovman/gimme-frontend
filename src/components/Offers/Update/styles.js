import styled from 'styled-components';

export const ContainerUpdateOffer = styled.div`
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
    .imageTrash{
      height: 20px;
      cursor: pointer;
    }

  }
}
.buttonStyle{
    border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxs};
    border-radius: 25px;
    background-color: ${(props) => props.theme.colors.color5};
    color: ${(props) => props.theme.colors.color2};
    text-align: center;
    font-weight: bold;
    font-family: ${(props) => props.theme.fontFamily};
    cursor: pointer;}
.buttonSection{
  .deleteButton{
    background-color: ${(props) => props.theme.colors.color1};
    color: ${(props) => props.theme.colors.color3};
  }
}
`;
