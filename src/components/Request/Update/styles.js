import styled from 'styled-components';

export const ContainerUpdateRequest = styled.div`
 height: 100vh;
margin-top: 50px;
margin-bottom: ${(props) => props.theme.size.xxxxxxxl};
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items: center;
  .contentSection{
    display: flex;
  flex-direction: column;
  row-gap: 10px;
  .imageGallery{
    border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
    height: 400px;
    width: 600px;
    background-color: ${(props) => props.theme.colors.color3};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    img{
      max-width: 450px;
      max-height: 300px;
    }
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
