import styled from "styled-components";

export const ContainerMessageService = styled.div`
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
.messageContainer{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.messageSent{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.messageError{
    margin-top: ${(props) => props.theme.size.xxxxxxxl}; 
}
.receiverNotAccessible{
    margin-top: ${(props) => props.theme.size.xxxxxxxl};
}
.noAddSelected{
    margin-top: ${(props) => props.theme.size.xxxxxxxl}; 
}
.fromContainer{
    background-color:  ${(props) => props.theme.colors.color3};
    padding:  ${(props) => props.theme.size.xxxs};
    .fromContainerInformation{
        display: flex;
        column-gap: ${(props) => props.theme.size.xxxs};
    }
}
.toContainer{
    background-color:  ${(props) => props.theme.colors.color3};
    padding:  ${(props) => props.theme.size.xxxs};
    .toContainerInformation{
        display: flex;
        column-gap: ${(props) => props.theme.size.xxxs};
    }
}
`