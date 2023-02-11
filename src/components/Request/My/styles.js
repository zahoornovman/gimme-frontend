import styled from "styled-components";

export const ContainerMyRequests = styled.div`
margin-top: ${(props) => props.theme.size.xxxxxxxl};
margin-bottom: ${(props) => props.theme.size.xxxxxxxl};
.requestContent{
    .objects{
      display: grid;
      grid-template-columns: repeat(3, 1fr)
    }
}
`