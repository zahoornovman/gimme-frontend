import styled from "styled-components";

export const ContainerNewRequest = styled.div`
.fontSize{
    font-size: ${(props) => props.theme.size.xxxs};
    @media (orientation: landscape){
        font-size: ${(props) => props.theme.size.xxxxs};
    }
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
.buttonStyle{
    border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxs};
border-radius: 25px;
background-color: ${(props) => props.theme.colors.color5};
color: ${(props) => props.theme.colors.color2};
text-align: center;
font-weight: bold;
font-family: ${(props) => props.theme.fontFamily};
cursor: pointer;
}
.accessDenied{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.created{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.error{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.requestContentSection{
    margin-top: ${(props) => props.theme.size.xxxxxxl};
}
.loading{
    margin-top: ${(props) => props.theme.size.xxxxxxl};
}
`