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
    background-color: ${(props) => props.theme.colors.color3};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    .containerImage{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 490px;
      width: 800px;
      .image {
      width: 740px;
      height: 490px;
      object-fit: cover;
      box-shadow: 2px 2px 5px black;
    }
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
    .containerTrash{
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      .imageTrash{
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

    .addImage {
      display: flex; 
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
}

  .inputField {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  .inputField label {
    margin-bottom: 30px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.color7};
  }

  .inputField input {
    width: 600px;
    height: 25px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.color5};
    padding: 5px;
    border: 1px solid ${(props) => props.theme.colors.color7};
    font-family: ${(props) => props.theme.fontFamily};
  }

  .inputField select {
    width: 150px;
    height: 30px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.color5};
    padding: 5px;
    border: 1px solid ${(props) => props.theme.colors.color7};
  }

  .inputField input:focus {
    outline:none;
  }

  .inputField select:focus {
    outline:none;
  }

  .inputField textarea:focus {
    outline:none;
  }

  #description {
    height: 200px;
    width: 600px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.color5};
    padding: 5px;
    border: 1px solid ${(props) => props.theme.colors.color7};
    resize: none;
    font-family: ${(props) => props.theme.fontFamily};
  }

  #request {
    height: 100px;
    width: 600px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.color5};
    padding: 5px;
    border: 1px solid ${(props) => props.theme.colors.color7};
    resize: none;
    font-family: ${(props) => props.theme.fontFamily};
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
    font-size: 15px;
    border-radius: 25px;
    background-color: ${(props) => props.theme.colors.color7};
    color: ${(props) => props.theme.colors.color1};
    text-align: center;
    font-family: ${(props) => props.theme.fontFamily};
    padding: 7px;
    cursor: pointer;
  }
.buttonSection{
  .deleteButton{
    background-color: ${(props) => props.theme.colors.color4};
    color: ${(props) => props.theme.colors.color3};
  }
   margin-top: 50px;
}

.errorMessage {
  margin-top: 30px;
  color: red;
}

.deletedImage {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contactButton {
    font-size: 15px;
    height: 40px;
    border-style: none;
    color: ${(props) => props.theme.colors.color5};
    border-radius: 10px;
    margin-top: 10px;
}
`;
