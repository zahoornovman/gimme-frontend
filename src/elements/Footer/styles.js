import styled from 'styled-components';

export const Footer = styled.div`
  font-size: ${(props) => props.theme.size.xxxxs};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme.colors.color7};
  box-shadow: 0px 15px 10px 12px #111;
  .a {
    text-decoration: none;
    margin-left: 15px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  .admin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
  }

  .logo {
    display: flex;
    width: 80px;
    height: auto;
    margin: 50px;
  }

  .socialIcons {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-left: 50px;
  }

  .socialIcons img {
    width: 30px;
    height: auto;
    margin-right: 15px;
  }
`;
