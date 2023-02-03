import styled from "styled-components";

export const HeaderContainer = styled.div`
position: fixed;
top: 0;
width: 100vw;
border-bottom: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxs};
display: flex;
flex-direction: column;
font-size: ${(props) => props.theme.size.xxxxxs};
background-color: ${(props) => props.theme.colors.color1};
        @media (orientation: portrait) and (min-width: 768px){
            font-size: ${(props) => props.theme.size.xs};
        }
        @media (orientation: landscape) and (min-height: 768px){
        font-size: ${(props) => props.theme.size.xs};
        }
        @media (orientation: portrait) and (min-width: 1024px){
        font-size: ${(props) => props.theme.size.s};
        }
        @media (orientation: landscape) and (min-height: 1024px){
        font-size: ${(props) => props.theme.size.s};
        }
.buttonSignIn{
    font-size: ${(props) => props.theme.size.xxxxxs};
        @media (orientation: portrait) and (min-width: 768px){
            font-size: ${(props) => props.theme.size.xs};
        }
        @media (orientation: landscape) and (min-height: 768px){
        font-size: ${(props) => props.theme.size.xs};
        }
        @media (orientation: portrait) and (min-width: 1024px){
        font-size: ${(props) => props.theme.size.s};
        }
        @media (orientation: landscape) and (min-height: 1024px){
        font-size: ${(props) => props.theme.size.s};
        }
}
.firstLine{
    display: flex;
    padding: ${(props) => props.theme.size.xxxxxxs};
    align-items: center;
    justify-content: space-between;
    .menuButton{
    background-color: ${(props) => props.theme.colors.color3};
    height: ${(props) => props.theme.size.s};
    width: ${(props) => props.theme.size.s};
    border-radius: 50%;
    
    img{
        height: ${(props) => props.theme.size.xs};
        width: ${(props) => props.theme.size.xs};
    }
}
}

`