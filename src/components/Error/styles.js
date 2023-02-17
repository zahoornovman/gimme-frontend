import styled from "styled-components";

export const MainError = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 50px;
.fontSize {
    font-size:${(props) => props.theme.size.s};
    @media (orientation: landscape) {
        font-size:${(props) => props.theme.size.xxs};
    }
    @media (orientation: portrait) and (min-width: 768px){
        font-size: ${(props) => props.theme.size.l};
    }
    @media (orientation: landscape) and (min-height: 768px){
        font-size: ${(props) => props.theme.size.l};
    }
    @media (orientation: portrait) and (min-width: 1024px){
        font-size: ${(props) => props.theme.size.xxxl};
    }
    @media (orientation: landscape) and (min-height: 1024px){
        font-size: ${(props) => props.theme.size.xxxl};
    }
}
.errorHeader{
    position: fixed;
    top: 0;
}
.errorContent{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxl};
    @media (orientation: landscape) {
        row-gap: ${(props) => props.theme.size.xxxxxxs};
    }
    @media (orientation: landscape) and (min-height: 768px){
        row-gap: ${(props) => props.theme.size.xxxxxl};
    }
    @media (orientation: landscape) and (min-height: 1024px){
        row-gap: ${(props) => props.theme.size.xxxxxxxl};
    }
    .errorMessage{
    text-align: center;
    }
    .errorEmojy{
    font-size: ${(props) => props.theme.size.xxxxxxxxl};
    @media (orientation: landscape) {
        font-size:${(props) => props.theme.size.xl};
    }
    @media (orientation: portrait) and (min-width: 768px){
        font-size: ${(props) => props.theme.size.xxxxxxxxxxl};
    }
    @media (orientation: landscape) and (min-height: 768px){
        font-size: ${(props) => props.theme.size.xxxxxxxxl};
    }
    @media (orientation: portrait) and (min-width: 1024px){
        font-size: ${(props) => props.theme.size.xxxxxxxxxxxxl};
    }
    @media (orientation: landscape) and (min-height: 1024px){
        font-size: ${(props) => props.theme.size.xxxxxxxxxxl};
    }
    }
    .errorButton{
        margin: 0 ${(props) => props.theme.size.s};
    }
}

`