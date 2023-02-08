import styled from "styled-components";

export const ContainernewOffer = styled.div`
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
.accessDenied{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.created{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.error{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.offerContentSection{
    margin-top: ${(props) => props.theme.size.xxxxxxl};
}`