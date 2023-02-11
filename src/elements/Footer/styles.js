import styled from 'styled-components';

export const Footer = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.size.xxxxs};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 75px;
  background-color: #577590;
  box-shadow: 0px 15px 10px 12px #111;
  a {
    text-decoration: none;
    margin-left: 15px;
    color: white;
  }
`;
