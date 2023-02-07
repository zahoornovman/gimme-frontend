import styled from "styled-components";

export const SignUpContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.fontSize{
    font-size: ${(props) => props.theme.size.xxxs};
    @media (orientation: portrait) and (min-width: 768px){
        font-size: ${(props) => props.theme.size.s};
    }
    @media (orientation: landscape) and (min-height: 768px){
        font-size: ${(props) => props.theme.size.s};
    }
    @media (orientation: portrait) and (min-width: 1024px){
        font-size: ${(props) => props.theme.size.l};
    }
    @media (orientation: landscape) and (min-height: 1024px){
        font-size: ${(props) => props.theme.size.l};
    }
}
.contentSignUp{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xs};
    @media (orientation: portrait) and (min-width: 768px){
        row-gap: ${(props) => props.theme.size.m};
        }
        @media (orientation: portrait) and (min-width: 1024px){
        row-gap: ${(props) => props.theme.size.l};
        }  
    .messageSignUp{
        background-color: ${(props) => props.theme.colors.color2};
        color: ${(props) => props.theme.colors.color5};
        border: ${(props) => props.theme.colors.color5} solid ${(props) => props.theme.size.xxxxxxxs};
        border-radius: ${(props) => props.theme.size.xxxxxxxs};
        text-align: center;
        padding:${(props) => props.theme.size.xxxxxxxs};
        width: 250px;
        @media (orientation: landscape) {
        width: 450px;
        }
        @media (orientation: portrait) and (min-width: 768px){
        width: 450px;
        }
        @media (orientation: landscape) and (min-height: 768px){
        width: 450px;
        }
        @media (orientation: portrait) and (min-width: 1024px){
        width: 650px;
        }
        @media (orientation: landscape) and (min-height: 1024px){
        width: 1000px;
        }
    }
    .inputSignUp{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxs};
    justify-content: center;
    align-items: center;
    @media (orientation: portrait) and (min-width: 768px){
        row-gap: ${(props) => props.theme.size.xxxxs};
        }
        @media (orientation: portrait) and (min-width: 1024px){
        row-gap: ${(props) => props.theme.size.xxxs};
        }
    .termsOfUseAcceptance{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        align-items: center;
        row-gap: ${(props) => props.theme.size.xxxxxxxxs};
        a{
            color: ${(props) => props.theme.colors.color5}
        }
        a:hover{
            font-weight: bold;
        }
        a:visited{
            color: ${(props) => props.theme.colors.color3}
        }
    }
   .inputField{
    display: flex;
    align-items: center;
    border-bottom: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxs};
    width: 250px;
    column-gap: ${(props) => props.theme.size.xxxxxxs};
    @media (orientation: portrait) and (min-width: 768px){
        width: 410px;
        } 
    @media (orientation: landscape) and (min-height: 768px){
        width: 410px;
    } 
    @media (orientation: portrait) and (min-width: 1024px){
        width: 620px;
        }   
        @media (orientation: landscape) and (min-height: 1024px){
        width: 620px;
    } 
    img{
        height: 20px;
        width: 20px;
        margin-bottom: ${(props) => props.theme.size.xxxxxxxs};
        @media (orientation: portrait) and (min-width: 768px){
        height: 30px;
        width: 30px;
        }
        @media (orientation: landscape) and (min-height: 768px){
        height: 30px;
        width: 30px;
        }
        @media (orientation: portrait) and (min-width: 1024px){
        height: 40px;
        width: 40px;
        }
        @media (orientation: landscape) and (min-height: 1024px){
        height: 40px;
        width: 40px;
        }
    }
    input{
        width: 222px;
        margin-bottom: ${(props) => props.theme.size.xxxxxxxs};
        border: none;
        @media (orientation: portrait) and (min-width: 768px){
        width: 372px;
        } 
        @media (orientation: landscape) and (min-height: 768px){
        width: 372px;
        }
        @media (orientation: portrait) and (min-width: 1024px){
        width: 572px;
        } 
        @media (orientation: landscape) and (min-height: 1024px){
        width: 572px;
        }
    }
   }  
   .buttonsSignUp{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxxs};
    @media (orientation: landscape) {
        flex-direction: row;
        column-gap: ${(props) => props.theme.size.xxxxxxs};
    }
    @media (orientation: portrait) and (min-width: 768px){
        row-gap: ${(props) => props.theme.size.xxxxs};
        } 
        @media (orientation: portrait) and (min-width: 1024px){
        row-gap: ${(props) => props.theme.size.xxxs};
        }
    .notSignUpButton{
        background-color:${(props) => props.theme.colors.color1};
        color: ${(props) => props.theme.colors.color3};
    }
   }         
}

}


`