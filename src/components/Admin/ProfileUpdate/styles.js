import styled from "styled-components";

export const ContainerUpdateUserProfile = styled.div`
margin-top: 50px;
min-height: 100vh;
position: relative;
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items: center;

/* .fontSize{
    font-size: ${(props) => props.theme.size.xxxs};
} */

  .details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  max-width: 800px;
  box-shadow: 2px 2px 5px black;
  margin-top: 30px;
  padding: 25px 10px 65px 10px;

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
    width: 300px;
    height: 25px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.color5};
    padding: 5px;
    border: 1px solid ${(props) => props.theme.colors.color7};
  }
}
/* .profileContentSection{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxxs};
    padding: 0 ${(props) => props.theme.size.xxxs};

    .profileItem{
        display: flex;
        flex-direction: column;
        row-gap: ${(props) => props.theme.size.xxxxxxxxs};

        .profileItemTitle{
            font-weight: bold;
            color: ${(props) => props.theme.colors.color5}
        }
        .profileItemInput{
            width: 240px;
            border: none;
            border-bottom: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
            color: ${(props) => props.theme.colors.color3};
            background-color: ${(props) => props.theme.colors.color1};
        }
    }
} */
.saveGoBackButton{
    font-size: 15px;
    height: 40px;
    border-style: none;
    color: ${(props) => props.theme.colors.color5};
    border-radius: 10px;
    margin-left: 20px;
    margin-bottom: 50px;
    margin-top: 50px;

    .deleteButton{
        background-color: ${(props) => props.theme.colors.color1};
        color: ${(props) => props.theme.colors.color3};
    }
}

`