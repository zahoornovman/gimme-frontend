import styled from "styled-components";

export const ContainerContact = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
.contactContentSection{
    padding: 0 ${(props) => props.theme.size.xxxxxxs};
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxxxs};
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
    .sectionContactPossibility{
        display: flex;
        flex-direction: column;
        row-gap: ${(props) => props.theme.size.xxxxxxxs};
        @media (orientation: landscape){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: ${(props) => props.theme.size.xxxs};
        row-gap: ${(props) => props.theme.size.xxxs};
        }
        @media (orientation: portrait) and (min-width: 768px){
            row-gap: ${(props) => props.theme.size.xxxxs};
        }
        @media (orientation: landscape) and (min-height: 768px){
            display: flex;
            flex-direction: column;
            row-gap: ${(props) => props.theme.size.xxxxs};
        }
        @media (orientation: portrait) and (min-width: 1024px){
            row-gap: ${(props) => props.theme.size.xxxs};
        }
        @media (orientation: landscape) and (min-height: 1024px){
            row-gap: ${(props) => props.theme.size.xxxs};
        }
        .contactPosibility{
        display: flex;
        column-gap: ${(props) => props.theme.size.xxxxxxs};
        align-items: center;
        @media (orientation: portrait) and (min-width: 768px){
            column-gap: ${(props) => props.theme.size.xxxxs};
        }
        @media (orientation: landscape) and (min-height: 768px){
            column-gap: ${(props) => props.theme.size.xxxxs};
        }
        @media (orientation: portrait) and (min-width: 1024px){
            column-gap: ${(props) => props.theme.size.xxxs};
        }
        @media (orientation: landscape) and (min-height: 1024px){
            column-gap: ${(props) => props.theme.size.xxxs};
        }
        .icons{
            height: 25px;
            width: 25px;
            @media (orientation: portrait) and (min-width: 768px){
                height: 35px;
                width: 35px;
            }
            @media (orientation: landscape) and (min-height: 768px){
                height: 35px;
                width: 35px;
            }
        }
        .addressSection{
            display: flex;
            flex-direction: column;
            row-gap: ${(props) => props.theme.size.xxxxxxxxs};
        }
        .mailbox{
            height: 40px;
            width: 25px;
            @media (orientation: portrait) and (min-width: 768px){
                height: 56px;
                width: 35px;
            }
            @media (orientation: landscape) and (min-height: 768px){
                height: 56px;
                width: 35px;
            }
        }
        }
    }
    
}



`