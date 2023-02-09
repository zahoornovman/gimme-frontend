import styled from "styled-components";

export const ContainerWelcome = styled.div`
margin-top: ${(props) => props.theme.size.xxxxxxl};
margin-bottom: ${(props) => props.theme.size.xxxxxxl};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
.loading{
    
}
.notLoading{
    .searchMatch{
        .searchResultButtons{
            display: flex;
            flex-direction: column;
        }
    }

    .objects{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: ${(props) => props.theme.size.xxxxxxs};
        column-gap: ${(props) => props.theme.size.xxxxxxs};    
        .object{
            border: ${(props) => props.theme.colors.color3} solid ${(props) => props.theme.size.xxxxxxxxs};
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            width: 120px;
            justify-content: center;
            align-items: center;
            h3{
                text-align: center;
                padding: ${(props) => props.theme.size.xxxxxxs};   
            }
            img{
                height: 50px;
                width: 37.54px;
            }
        }
    }
}
.overlayer{
    background-color: transparent;
    z-index: 10;
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    .popUpWelcomePage{
        z-index: 20;
        a{
        color: ${(props) => props.theme.colors.color3};
    }
    a:hover{
        font-weight: bold;
    }
    a:visited{
        color: ${(props) => props.theme.colors.color5};
        
    }

}
}

`