import styled from "styled-components"

export const Footer = styled.div`
color: ${(props) => props.theme.colors.color3};
font-weight: bold;
font-size: ${(props) => props.theme.size.xxxxs};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-top: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxs};
row-gap: ${(props) => props.theme.size.xxxxxxxs};
padding: ${(props) => props.theme.size.xxxxxxs} 0;
position: fixed;
width: 100vw;
bottom: 0;
background-color: ${(props) => props.theme.colors.color1};
@media (orientation: portrait) and (min-width: 768px){
        font-size: ${(props) => props.theme.size.xs};
        row-gap: ${(props) => props.theme.size.xxxxxxs};
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
.firstLine{
    @media (orientation: landscape) {
        width: 100vw;
        display: flex;
       flex-direction: row;
       justify-content:center;
       align-items: center;
       column-gap: ${(props) => props.theme.size.s};
    }
    @media (orientation: landscape) and (min-height: 1024px){
        column-gap: ${(props) => props.theme.size.xl};
    }
    .displayFirstLine{
    @media (orientation: portrait) {
    display: none;
    }
    @media (orientation: landscape) {
       display: flex;
    }
}
}
a, a:visited{
    color: ${(props) => props.theme.colors.color3};
    text-decoration: none;
}
img{
    width: 20px;
    height: 20px;
    @media (orientation: portrait) and (min-width: 768px){
        width: 30px;
        height: 30px;
    }
    @media (orientation: landscape) and (min-height: 768px){
        width: 30px;
        height: 30px;
    }
    @media (orientation: portrait) and (min-width: 1024px){
        width: 40px;
        height: 40px;
    }
    @media (orientation: landscape) and (min-height: 1024px){
        width: 40px;
        height: 40px;
    }
}
.cursorPointer{
    cursor: pointer;
}

.displaySecondLine{
    @media (orientation: landscape) {
        display: none;
    }
}
`
