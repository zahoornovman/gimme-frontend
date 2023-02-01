import styled from "styled-components";


//headers
export const Header1 = styled.h1`
color: ${(props) => props.theme.colors.color3};
font-weight: bold;
text-align: center;
padding: ${(props) => props.theme.size.xxxxxxs};
@media (orientation: portrait) and (min-width: 768px){
    padding: ${(props) => props.theme.size.xxxxs};
}
`

//text
export const TextContainer = styled.div`
color: ${(props) => props.theme.colors.color3};
padding: ${(props) => props.theme.size.xxxxxxs};
@media (orientation: portrait) and (min-width: 768px){
    padding: ${(props) => props.theme.size.xxxxs};
}
`

export const EmjoyContainer = styled.div`
padding: ${(props) => props.theme.size.xxxxxxs};
text-align: center;
@media (orientation: portrait) and (min-width: 768px){
    padding: ${(props) => props.theme.size.xxxxs};
}
`

//buttons
export const TextButton = styled.button`
border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxs};
border-radius: 25px;
background-color: ${(props) => props.theme.colors.color5};
color: ${(props) => props.theme.colors.color2};
text-align: center;
font-weight: bold;
font-family: ${(props)=>props.theme.fontFamily};
`