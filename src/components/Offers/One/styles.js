import styled from 'styled-components';

export const ContainerOneOffer = styled.div`
margin-top: 50px;
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
  padding: 20px 10px 20px 10px;
}

.details h3{
  font-size: 15px;
  padding: 20px;
  color: ${(props) => props.theme.colors.color7};
  text-align: center;
}

  
`;
