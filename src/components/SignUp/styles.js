import styled from "styled-components";

export const SignUpContainer = styled.div`
margin-top: 50px;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
.fontSize{
    font-size: ${(props) => props.theme.size.xxxs};
}
.contentSignUp{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xs};
 
    .messageSignUp{
        background-color: ${(props) => props.theme.colors.color2};
        color: ${(props) => props.theme.colors.color5};
        border: ${(props) => props.theme.colors.color5} solid ${(props) => props.theme.size.xxxxxxxs};
        border-radius: ${(props) => props.theme.size.xxxxxxxs};
        text-align: center;
        padding:${(props) => props.theme.size.xxxxxxxs};
        width: 250px;
    }
    .inputSignUp{
    display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 600px;
      max-width: 800px;
      box-shadow: 2px 2px 5px black;
      margin-top: 30px;
      padding: 50px 10px 50px 10px;

    .termsOfUseAcceptance{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: ${(props) => props.theme.size.xxxxxxxxs};
        padding: 30px;
        a{
            color: ${(props) => props.theme.colors.color4}
        }
        a:hover{
            font-weight: bold;
        }
        a:visited{
            color: ${(props) => props.theme.colors.color7}
        }
    }
   .inputField{
    display: flex;
    align-items: center;
    border-bottom: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxs};
    width: 250px;
    column-gap: ${(props) => props.theme.size.xxxxxxs};
 
    input{
    width: 300px;
    height: 25px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.color5};
    padding: 5px;
    border: 1px solid ${(props) => props.theme.colors.color7};
    margin-top: 10px;
    }
    input:focus {
        outline: none;
    }
   }  
   .buttonsSignUp{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxxs};

    .notSignUpButton{
        background-color:${(props) => props.theme.colors.color1};
        color: ${(props) => props.theme.colors.color3};
    }
   }         
}

}


`