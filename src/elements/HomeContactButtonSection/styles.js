import styled from "styled-components";

export const ContainerHomeContectButtonSection = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-around;
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

`