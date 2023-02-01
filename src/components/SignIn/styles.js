import styled from "styled-components";

export const SignInContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.contentSignIn{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xs};
    .signInMessage{

    }
    .inputSignIn{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxxs};
    justify-content: center;
    align-items: center;
   .inputField{
    display: flex;
    align-items: center;
    border-bottom: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxs};
    width: 200px;
    column-gap: ${(props) => props.theme.size.xxxxxxs};    
    img{
        height: 20px;
        width: 20px;
        margin-bottom: ${(props) => props.theme.size.xxxxxxxs};
    }
    input{
        width: 172px;
        margin-bottom: ${(props) => props.theme.size.xxxxxxxs};
        border: none;
    }
   }  
   .buttonsSignIn{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxxs};
   }         
}

}


`