import styled from "styled-components";

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${(props) => props.theme.colors.color5};
    color: ${(props) => props.theme.colors.color2};
    margin-top: 15px;   
    position: absolute;
    left: ${(props) => props.theme.size.xxxxxxs};    
    z-index: 1;
    border-radius: 4px;
    @media (orientation: landscape) {
        flex-direction: row;
    }
    @media (orientation: landscape) and (min-height: 768px){
        flex-direction: column;
    }
    .menuSection{
        display: flex;
        flex-direction: column;
        padding: ${(props) => props.theme.size.xxxxxxxs};
        row-gap: ${(props) => props.theme.size.xxxxxs};
        .fontsize{
        font-size: ${(props) => props.theme.size.xxxxxs};
        @media (orientation: portrait) and (min-width: 768px){
            font-size: ${(props) => props.theme.size.xs};
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
        }
        h2{
        background-color: ${(props) => props.theme.colors.color1};
        color: ${(props) => props.theme.colors.color3};
        font-weight: bold;
        padding: ${(props) => props.theme.size.xxxxxxxs} 0;
        text-align: center;
        }
        div{
            cursor: pointer;
        }
    }
    
`