import styled from "styled-components";

export const ContainernewOffer = styled.div`
min-height: 100vh;
position: relative;
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items: center;
  .offerContentSection {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
       
      .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 800px;
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

 .saveButton {
    font-size: 15px;
    height: 40px;
    width: 80px;
    border-style: none;
    text-align: center;
    color: ${(props) => props.theme.colors.color5};
    border-radius: 10px;
    margin-left: 20px;
    margin-bottom: 50px;
    margin-top: 20px;
}


.buttonStyle{
    font-size: 15px;
    border-radius: 25px;
    background-color: ${(props) => props.theme.colors.color7};
    color: ${(props) => props.theme.colors.color1};
    text-align: center;
    font-family: ${(props) => props.theme.fontFamily};
    padding: 8px;
    cursor: pointer;
}

.createdButtons button {
  font-size: 15px;
  height: 40px;
  width: 120px;
  border-style: none;
  text-align: center;
  color: ${(props) => props.theme.colors.color5};
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 30px;
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

.accessDenied{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.created{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.error{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.offerContentSection{
    margin-top: ${(props) => props.theme.size.xxxxxxl};
}
.loading{
    margin-top: ${(props) => props.theme.size.xxxxxxl};
}
`