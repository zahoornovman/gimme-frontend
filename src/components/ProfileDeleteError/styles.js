import styled from "styled-components";

export const ContainerProfileDeleteError = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
row-gap: ${(props) => props.theme.size.s};
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
.passwordForgotenMessage{
    padding: 0 ${(props) => props.theme.size.xxxs};
    text-align: center;
    @media (orientation: portrait) and (min-width: 768px){
        padding: 0 ${(props) => props.theme.size.xxxxxxl};
    }
    @media (orientation: landscape) and (min-height: 768px){
        padding: 0 ${(props) => props.theme.size.xxxxxxxxxxl};
    }
    @media (orientation: portrait) and (min-width: 1024px){
        padding: 0 ${(props) => props.theme.size.xxxxxxxxl};
    }
    @media (orientation: landscape) and (min-height: 1024px){
        padding: 0 ${(props) => props.theme.size.xxxxxxxxxxl};
    }
}
`