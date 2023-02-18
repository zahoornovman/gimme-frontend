import styled from "styled-components";

export const ContainerContact = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-top: 50px;
h2 {
    font-size: 30px;
    margin-bottom: 20px;
}
.contactInfo{
    display: flex;
    flex-direction: column;
    font-size: 30px;
    padding: 50px;
    box-shadow: 2px 2px 5px black;
    
    .contactElements {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
}
`