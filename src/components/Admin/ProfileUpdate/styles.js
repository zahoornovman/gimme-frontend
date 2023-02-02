import styled from "styled-components";

export const ContainerUpdateUserProfile = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
row-gap: ${(props) => props.theme.size.s};
@media (orientation: landscape){
    row-gap: ${(props) => props.theme.size.xxxxxxxs};
}
@media (orientation: landscape) and (min-height: 768px){
    row-gap: ${(props) => props.theme.size.s};
}

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
.profileContentSection{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxxs};
    padding: 0 ${(props) => props.theme.size.xxxs};
    @media (orientation: landscape){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: ${(props) => props.theme.size.xxxs};
    }
    @media (orientation: landscape) and (min-height: 768px){
        display: flex;
        flex-direction: column;
        row-gap: ${(props) => props.theme.size.xxxxxxs};
        padding: 0 ${(props) => props.theme.size.xxxs};
    }
    .profileItem{
        display: flex;
        flex-direction: column;
        row-gap: ${(props) => props.theme.size.xxxxxxxxs};
        @media (orientation: landscape){
        row-gap: ${(props) => props.theme.size.xxxxxxxxs};
        width: 210px;
        }
        @media (orientation: landscape) and (min-height: 768px){
        width: 400px;
        }
        @media (orientation: landscape) and (min-height: 1024px){
            width: 600px;
            }
        .profileItemTitle{
            font-weight: bold;
            color: ${(props) => props.theme.colors.color5}
        }
        .profileItemInput{
            width: 240px;
            border: none;
            border-bottom: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
            color: ${(props) => props.theme.colors.color3};
            background-color: ${(props) => props.theme.colors.color1};
            @media (orientation: landscape){
            width: 190px;
            }
            @media (orientation: portrait) and (min-width: 768px){
            width: 400px;
            }
            @media (orientation: landscape) and (min-height: 768px){
            width: 400px;
            }
            @media (orientation: portrait) and (min-width: 1024px){
            width: 600px;
            }
            @media (orientation: landscape) and (min-height: 1024px){
            width: 600px;
            }
        }
    }
}
.profileButtonContainer{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxxs};
    @media (orientation: landscape){
        flex-direction: row;
        column-gap: ${(props) => props.theme.size.xxxxxxs};
    }
    .deleteButton{
        background-color: ${(props) => props.theme.colors.color1};
        color: ${(props) => props.theme.colors.color3};
    }
}

`