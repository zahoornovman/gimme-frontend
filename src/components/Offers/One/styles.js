import styled from 'styled-components';

export const ContainerOneOffer = styled.div`
height: 100vh;
margin-top: 50px;
margin-bottom: ${(props) => props.theme.size.xxxxxxxl};
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items: center;
.contentSection{
  display: flex;
  flex-direction: row;
  .imageBox {
    width: 600px;
    height: 400px;
    border: 1px solid grey;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .imageBox img {
    width:100%;
    height: 100%;
    object-fit:cover;
  }

  .imageGallery{
    border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
    height: 600px;
    width: 400px;
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
}

.details {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
}

.details h3{
  font-size: 18px;
  padding: 20px;
  color: ${(props) => props.theme.colors.color7};
}

  
`;
