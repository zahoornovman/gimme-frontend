import styled from "styled-components";

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.size.xxxxxs};
  background-color: ${(props) => props.theme.colors.color7};
  box-shadow: 0px 15px 10px -18px #111;
  /*   @media (orientation: portrait) and (min-width: 768px) {
    font-size: ${(props) => props.theme.size.xs};
  }
  @media (orientation: landscape) and (min-height: 768px) {
    font-size: ${(props) => props.theme.size.xs};
  }
  @media (orientation: portrait) and (min-width: 1024px) {
    font-size: ${(props) => props.theme.size.s};
  }
  @media (orientation: landscape) and (min-height: 1024px) {
    font-size: ${(props) => props.theme.size.s};
  } */
  .buttonSignIn {
    font-size: 16px;
    height: 40px;
    border-style: none;
    color: ${(props) => props.theme.colors.color5};
    border-radius: 10px;
    margin-left: 20px;

    /*     @media (orientation: portrait) and (min-width: 768px) {
      font-size: ${(props) => props.theme.size.xs};
    }
    @media (orientation: landscape) and (min-height: 768px) {
      font-size: ${(props) => props.theme.size.xs};
    }
    @media (orientation: portrait) and (min-width: 1024px) {
      font-size: ${(props) => props.theme.size.s};
    }
    @media (orientation: landscape) and (min-height: 1024px) {
      font-size: ${(props) => props.theme.size.s};
    } */
  }
  .firstLine {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 60% 40%;
    padding-left: ${(props) => props.theme.size.xxxxxxs};
    padding-top: ${(props) => props.theme.size.xxxxxxs};
    padding-bottom: ${(props) => props.theme.size.xxxxxxs};
    padding-right: ${(props) => props.theme.size.s};

    .headerRight {
      display: flex;
      align-items: center;
      padding: 0 1rem;

      .userloggedIn {
        padding: 0 4rem;
        margin-left: 6rem;
      }

      .userNotLoggedIn {
        display: flex;
        justify-content: space-around;
        padding: 0 1.5rem;
      }
    }

    .headerLeft {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 0rem;

      .imageHome {
        height: ${(props) => props.theme.size.xxxxxl};
        width: ${(props) => props.theme.size.xxxxxl};
        padding-right: 2rem;
        transition-duration: 250ms;
        transition-property: transform;
        :hover {
          transform: scale(1.05) rotate(10deg);
        }
      }
    }

    .menuArea {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 0 1rem;
      align-items: center;
      cursor: pointer;
      color: ${(props) => props.theme.colors.color1};
      font-size: ${(props) => props.theme.size.xxs};
      row-gap: ${(props) => props.theme.size.xxxxxxxxs};
      img {
        height: ${(props) => props.theme.size.xxs};
        width: ${(props) => props.theme.size.xs};
      }
    }
  }
`;
