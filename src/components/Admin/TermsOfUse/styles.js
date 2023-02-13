import styled from "styled-components";

export const ContainerTermsOfUse = styled.div`
width: 100vw;
.fontSize{
        font-size: 16px;
        font-family: ${(props)=>props.theme.fontFamily};
        color: black;
    }
.termsOfUseSection{
    margin-top: ${(props) => props.theme.size.xxxxxxl};
    margin-bottom: ${(props) => props.theme.size.xxxxxxl};
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: ${(props) => props.theme.size.xxxxs};
/*     @media (orientation: landscape){
        row-gap: ${(props) => props.theme.size.xxxxxxs};
    }
    @media (orientation: portrait) and (min-width: 768px){
        margin-top: ${(props) => props.theme.size.xxxxxxxxl};
        margin-bottom: ${(props) => props.theme.size.xxxxxxxxl};
    }
    @media (orientation: landscape) and (min-height: 768px){
        margin-top: ${(props) => props.theme.size.xxxxxxxxl};
        margin-bottom: ${(props) => props.theme.size.xxxxxxl};
    }
    @media (orientation: portrait) and (min-width: 1024px){
        margin-top: ${(props) => props.theme.size.xxxxxxxxxl};
        margin-bottom: ${(props) => props.theme.size.xxxxxxxl};
    }
    @media (orientation: landscape) and (min-height: 1024px){
        margin-top: ${(props) => props.theme.size.xxxxxxxxxl};
        margin-bottom: ${(props) => props.theme.size.xxxxxxxl};
    } */
}
`