import styled from "styled-components";

export const ContainerUserProfile = styled.div`
margin-top: 50px;
min-height: 100vh;
position: relative;
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items: center;
/* @media (orientation: landscape){
    row-gap: ${(props) => props.theme.size.xxxxxxxs};
}
@media (orientation: landscape) and (min-height: 768px){
    row-gap: ${(props) => props.theme.size.s};
} */

.fontSize{
    font-size: ${(props) => props.theme.size.s};
/*     @media (orientation: landscape){
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
    } */
}
.profileContentSection{
    display: flex;
    flex-direction: column;
    width: 600px;
    justify-content: center;
    align-items: center;
    padding: 30px;
    box-shadow: 2px 2px 5px black;
    margin-top: 30px;
/*     @media (orientation: landscape){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: ${(props) => props.theme.size.xxxxxs};
    }
    @media (orientation: landscape) and (min-height: 768px){
        display: flex;
        flex-direction: column;
        row-gap: ${(props) => props.theme.size.xxxxxxs};
        padding: 0 ${(props) => props.theme.size.xxxs};
    } */
    .profileItem{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
/*         @media (orientation: landscape){
        row-gap: ${(props) => props.theme.size.xxxxxxxxs};
        } */
        .profileItemTitle{
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-top: 10px;
            color: ${(props) => props.theme.colors.color4}
        }
    }
}
.profileButtonContainer{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxs};
    margin-top: 50px;
/*     @media (orientation: landscape){
        flex-direction: row;
        column-gap: ${(props) => props.theme.size.xxxxxxs};
    } */
    .deleteButton{
        font-size: 15px;
        height: 40px;
        border-style: none;
        color: ${(props) => props.theme.colors.color5};
        border-radius: 10px;
    }

    .updateButton {
        font-size: 15px;
        height: 40px;
        border-style: none;
        color: ${(props) => props.theme.colors.color5};
        border-radius: 10px;
    }

    .resetButton {
        font-size: 15px;
        height: 40px;
        border-style: none;
        color: ${(props) => props.theme.colors.color5};
        border-radius: 10px;
    }
}
.popUpProfileDelete{
    display: flex;
    flex-direction: column;
    row-gap: ${(props) => props.theme.size.xxxxxxxs};
    padding: ${(props) => props.theme.size.xxxxxxxs} 0;
/*     @media (orientation: landscape){
        flex-direction: row;
        column-gap: ${(props) => props.theme.size.xxxxxxs};
        align-items: center;
        justify-content: center;
        width: 350px;
        padding: ${(props) => props.theme.size.xxxxxxxxs} 0;
    }
    @media (orientation: portrait) and (min-width: 768px){
        width: 500px;
        row-gap: ${(props) => props.theme.size.xxxxxs};
    }
    @media (orientation: landscape) and (min-height: 768px){
        width: 600px;
    }
    @media (orientation: portrait) and (min-width: 1024px){
        width: 600px;
        row-gap: ${(props) => props.theme.size.xxxxxs};
    }
    @media (orientation: landscape) and (min-height: 1024px){
        width: 800px;
        padding: ${(props) => props.theme.size.xxxxxxs} 0;
    } */
    
    .popUpButtonSection{
        display: flex;
        column-gap: ${(props) => props.theme.size.xxxxxxxs};
        justify-content: center;
        align-items: center;
/*         @media (orientation: landscape) and (min-height: 768px){
            column-gap: ${(props) => props.theme.size.xxxxxxs};
         } */
    }
}
`