import styled from 'styled-components';

export const ContainerUpdateOffer = styled.div`
margin-top: 50px;
min-height: 100vh;
position: relative;
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items: center;
  .contentSection{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  .imageGallery {
    border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
    height: 550px;
    width: 800px;
    background-color: ${(props) => props.theme.colors.color3};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 2px 2px 5px black;
    }
    .cheveronButton{
      height: 20px;
      cursor: pointer;
    }
    .imageTrash{
      background-color: black;
      height: 20px;
      cursor: pointer;
    }
  }

  .details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  box-shadow: 2px 2px 5px black;
  margin-top: 50px;
  padding: 25px 10px 40px 10px;
}

.inputField {
  margin-top: 50px;
}
}
.saveGoBackButton {
    font-size: 15px;
    height: 40px;
    border-style: none;
    color: ${(props) => props.theme.colors.color5};
    border-radius: 10px;
    margin-left: 20px;
    margin-bottom: 50px;
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
    background-color: ${(props) => props.theme.colors.color4};
    color: ${(props) => props.theme.colors.color3};
  }
      margin-top: 50px;
}
`;
