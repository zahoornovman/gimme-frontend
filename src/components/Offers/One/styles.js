import styled from 'styled-components';

export const ContainerOneOffer = styled.div`
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
  
  .imageGallery{
    border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
    height: 550px;
    width: 800px;
    background-color: ${(props) => props.theme.colors.color3};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    box-shadow: 2px 2px 5px black;
    .image {
      width: 740px;
      height: 490px;
      object-fit: contain;
    }
    .cheveronButton{
      height: 20px;
      width: 30px;
      cursor: pointer;
    }
    .noCheveronButton{
      width: 30px;
    }

  }
}
.buttonSection{
  .deleteButton{
    background-color: ${(props) => props.theme.colors.color1};
    color: ${(props) => props.theme.colors.color3};
  }
}

.messageUpdateDeleteButton {
    font-size: 15px;
    height: 40px;
    border-style: none;
    color: ${(props) => props.theme.colors.color5};
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
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

.details h3{
  font-size: 15px;
  padding: 20px;
  color: ${(props) => props.theme.colors.color7};
  text-align: center;
}

.descriptionContainer {
  max-width: 700px;
  height: auto;
}

.requestedContainer {
  max-width: 700px;
  height: auto;
}

.popUpDelete{
  margin: 20px; 
  .popUpButtonSection{
    display: flex;
    justify-content: center;
    column-gap: 20px;
    margin-top: 10px;
  }
}
  
`;
