import styled from "styled-components";

export const SearchOfferContainer = styled.div`
select {
    width: 90px;
    height: 40px;
    border-style: none;
    border-right: 1px solid grey;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: ${(props) => props.theme.colors.color2};
    font-family: ${(props)=>props.theme.fontFamily};
    font-size: 15px;
    padding-left: 12px;
    box-shadow: 3px 3px 1px grey;  
}

input {
    width: 600px;
    height: 38px;
    border-style: none;
    border-right: 1px solid grey;
    background-color:${(props) => props.theme.colors.color3};
    font-family: ${(props)=>props.theme.fontFamily};
    padding-left: 10px;
    box-shadow: 3px 3px 1px grey;
}

input:focus {
    outline:none;
}

button {
    width: 90px;
    height: 40px;
    border-style: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 3px 3px 1px grey;
    background-color: ${(props) => props.theme.colors.color2};
    font-family: ${(props)=>props.theme.fontFamily};
    font-size: 15px;
    cursor: pointer;
}

`;
